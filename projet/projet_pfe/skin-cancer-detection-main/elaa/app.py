# Import des bibliothèques nécessaires
from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import pymysql.cursors
import logging
from datetime import datetime

# Initialisation de l'application Flask
app = Flask(__name__)

# Configuration CORS pour permettre les requêtes depuis le frontend
# Cette configuration permet à votre page HTML de communiquer avec le serveur Python
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configuration du système de logging pour tracer les opérations et déboguer
# Les logs sont sauvegardés dans le fichier 'flask.log' avec horodatage
logging.basicConfig(level=logging.DEBUG, filename='flask.log', filemode='a',
                    format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def verify_database():
    """
    Fonction de vérification et d'initialisation de la base de données
    Cette fonction s'assure que la base de données 'cancer' existe et que la table 'patients' est créée
    Elle vérifie également la connectivité et les permissions MySQL
    """
    try:
        # Connexion initiale sans spécifier de base de données
        conn = pymysql.connect(
            host='localhost',
            user='root',
            password='',  # Mot de passe vide pour XAMPP par défaut
            charset='utf8mb4'
        )
        
        with conn.cursor() as cursor:
            # Vérification des bases de données disponibles
            cursor.execute("SHOW DATABASES")
            databases = cursor.fetchall()
            logger.debug(f"Bases disponibles: {databases}")
            
            # Création de la base de données 'cancer' si elle n'existe pas
            cursor.execute("CREATE DATABASE IF NOT EXISTS `cancer`")
            cursor.execute("USE `cancer`")
            
            # Création de la table 'patients' avec structure complète
            # Cette table stocke toutes les informations nécessaires pour l'inscription et la connexion
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS `patients` (
                    `id` INT NOT NULL AUTO_INCREMENT,
                    `nom` VARCHAR(50) NOT NULL,
                    `prenom` VARCHAR(50) NOT NULL,
                    `date_naissance` DATE NOT NULL,
                    `sexe` ENUM('Homme','Femme','Autre') NOT NULL,
                    `date_creation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    PRIMARY KEY (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            """)
            
            # Vérifications supplémentaires pour le débogage
            cursor.execute("SELECT CURRENT_USER()")
            user = cursor.fetchone()
            logger.debug(f"Utilisateur MySQL: {user}")
            
            cursor.execute("SHOW VARIABLES LIKE 'autocommit'")
            autocommit = cursor.fetchone()
            logger.debug(f"Autocommit: {autocommit}")
            
        conn.close()
        return True
    except Exception as e:
        logger.error(f"ERREUR CRITIQUE BASE: {str(e)}", exc_info=True)
        return False

def get_db():
    """
    Fonction de connexion à la base de données avec gestion d'erreurs
    Cette fonction établit une connexion sécurisée à la base de données MySQL
    Elle utilise DictCursor pour retourner les résultats sous forme de dictionnaires
    """
    try:
        conn = pymysql.connect(
            host='localhost',
            user='root',
            password='',
            database='cancer',
            charset='utf8mb4',
            cursorclass=pymysql.cursors.DictCursor,  # Les résultats seront des dictionnaires
            autocommit=True  # Validation automatique des transactions
        )
        # Test de la connexion
        with conn.cursor() as cursor:
            cursor.execute("SELECT 1")
            logger.debug("Connexion à la base réussie")
        return conn
    except Exception as e:
        logger.error(f"ECHEC CONNEXION: {str(e)}")
        raise

@app.route('/')
def home():
    """
    Route de test pour vérifier le fonctionnement du serveur
    Cette route simple permet de s'assurer que Flask fonctionne correctement
    """
    logger.debug("Accès à la route /")
    return jsonify({'success': True, 'message': 'Flask server is running!'})

@app.route('/api/register', methods=['POST'])
def register():
    """
    Route d'inscription pour les nouveaux patients
    Cette fonction gère l'enregistrement de nouveaux patients dans la base de données
    Elle effectue des validations complètes des données avant l'insertion
    """
    try:
        # Récupération des données JSON envoyées par le frontend
        data = request.get_json()
        logger.debug(f"Données reçues pour inscription: {data}")

        # Validation des champs obligatoires
        required_fields = ['nom', 'prenom', 'date_naissance', 'sexe']
        if not all(k in data for k in required_fields):
            logger.error(f"Champs manquants: {required_fields}")
            return jsonify({'success': False, 'message': 'Champs manquants'}), 400

        # Validation du format de date
        try:
            datetime.strptime(data['date_naissance'], '%Y-%m-%d')
        except ValueError:
            logger.error(f"Format de date invalide: {data['date_naissance']}")
            return jsonify({'success': False, 'message': 'Format de date invalide (YYYY-MM-DD)'}), 400

        # Validation du sexe
        if data['sexe'] not in ['Homme', 'Femme', 'Autre']:
            logger.error(f"Sexe invalide: {data['sexe']}")
            return jsonify({'success': False, 'message': 'Sexe invalide'}), 400

        conn = None
        try:
            # Établissement de la connexion à la base de données
            conn = get_db()
            with conn.cursor() as cursor:
                # Insertion du nouveau patient avec limitation de la longueur des chaînes
                sql = """
                INSERT INTO patients (nom, prenom, date_naissance, sexe)
                VALUES (%s, %s, %s, %s)
                """
                cursor.execute(sql, (
                    data['nom'][:50],  # Limitation à 50 caractères
                    data['prenom'][:50],
                    data['date_naissance'],
                    data['sexe']
                ))
                logger.debug(f"INSERT exécuté, LAST_INSERT_ID: {cursor.lastrowid}")

                # Vérification de l'insertion en récupérant l'enregistrement créé
                cursor.execute("SELECT * FROM patients WHERE id = LAST_INSERT_ID()")
                new_record = cursor.fetchone()
                logger.debug(f"Enregistrement vérifié: {new_record}")

                if not new_record:
                    logger.error("Aucun enregistrement trouvé après insertion")
                    raise Exception("Aucun enregistrement trouvé après insertion")

                # Comptage total des patients pour statistiques
                cursor.execute("SELECT COUNT(*) as count FROM patients")
                total_count = cursor.fetchone()['count']
                logger.debug(f"Nombre total d'enregistrements: {total_count}")

            return jsonify({
                'success': True,
                'id': new_record['id'],
                'data': new_record,
                'total_count': total_count
            }), 201

        except pymysql.Error as e:
            logger.error(f"ERREUR MYSQL: {e.args}", exc_info=True)
            return jsonify({
                'success': False,
                'message': 'Erreur base de données',
                'code': e.args[0],
                'detail': e.args[1]
            }), 500
        finally:
            if conn:
                conn.close()
                logger.debug("Connexion fermée")
            
    except Exception as e:
        logger.error(f"ERREUR SERVEUR: {str(e)}", exc_info=True)
        return jsonify({
            'success': False,
            'message': 'Erreur interne',
            'error': str(e)
        }), 500

@app.route('/api/login', methods=['POST'])
def login():
    """
    Route de connexion pour les patients existants
    Cette fonction vérifie l'existence d'un patient avec le nom et prénom fournis
    Si le patient existe, elle retourne ses informations pour permettre la connexion
    """
    try:
        # Récupération des données de connexion
        data = request.get_json()
        logger.debug(f"Tentative de connexion: {data}")

        # Vérification des champs requis pour la connexion
        required_fields = ['nom', 'prenom']
        if not all(k in data for k in required_fields):
            logger.error(f"Champs manquants pour la connexion: {required_fields}")
            return jsonify({'success': False, 'message': 'Nom et prénom requis'}), 400

        # Nettoyage et validation des données d'entrée
        nom = data['nom'].strip()
        prenom = data['prenom'].strip()
        
        if not nom or not prenom:
            return jsonify({'success': False, 'message': 'Nom et prénom ne peuvent pas être vides'}), 400

        conn = None
        try:
            conn = get_db()
            with conn.cursor() as cursor:
                # Recherche du patient par nom et prénom (insensible à la casse)
                # L'utilisation de LOWER() permet une recherche flexible
                sql = """
                SELECT id, nom, prenom, date_naissance, sexe, date_creation
                FROM patients 
                WHERE LOWER(nom) = LOWER(%s) AND LOWER(prenom) = LOWER(%s)
                LIMIT 1
                """
                cursor.execute(sql, (nom, prenom))
                patient = cursor.fetchone()
                
                if patient:
                    logger.debug(f"Patient trouvé: {patient['id']} - {patient['nom']} {patient['prenom']}")
                    
                    # Conversion des dates pour un affichage correct dans le JSON
                    # Les objets datetime Python doivent être convertis en chaînes pour JSON
                    if patient['date_naissance']:
                        patient['date_naissance'] = patient['date_naissance'].strftime('%Y-%m-%d')
                    if patient['date_creation']:
                        patient['date_creation'] = patient['date_creation'].strftime('%Y-%m-%d %H:%M:%S')
                    
                    return jsonify({
                        'success': True,
                        'message': 'Connexion réussie',
                        'patient': patient
                    }), 200
                else:
                    logger.debug(f"Aucun patient trouvé avec nom: {nom}, prenom: {prenom}")
                    return jsonify({
                        'success': False,
                        'message': 'Aucun patient trouvé avec ces informations'
                    }), 404

        except pymysql.Error as e:
            logger.error(f"ERREUR MYSQL lors de la connexion: {e.args}", exc_info=True)
            return jsonify({
                'success': False,
                'message': 'Erreur de base de données',
                'code': e.args[0] if e.args else 'unknown'
            }), 500
        finally:
            if conn:
                conn.close()
                logger.debug("Connexion fermée après tentative de login")
            
    except Exception as e:
        logger.error(f"ERREUR SERVEUR lors de la connexion: {str(e)}", exc_info=True)
        return jsonify({
            'success': False,
            'message': 'Erreur interne du serveur',
            'error': str(e)
        }), 500

@app.route('/api/statistics', methods=['GET'])
def statistics():
    """
    Route pour récupérer les statistiques des patients par sexe
    Cette fonction retourne le nombre et le pourcentage d'hommes et de femmes enregistrés
    """
    try:
        conn = None
        try:
            conn = get_db()
            with conn.cursor() as cursor:
                # Comptage par sexe
                cursor.execute("""
                    SELECT sexe, COUNT(*) as count 
                    FROM patients 
                    GROUP BY sexe
                """)
                results = cursor.fetchall()
                
                # Comptage total
                cursor.execute("SELECT COUNT(*) as total FROM patients")
                total_result = cursor.fetchone()
                total_count = total_result['total']
                
                logger.debug(f"Statistiques: {results}, Total: {total_count}")
                
                # Préparation des données de réponse
                stats = {
                    'total': total_count,
                    'by_gender': {},
                    'percentages': {}
                }
                
                # Initialisation des compteurs
                stats['by_gender'] = {'Homme': 0, 'Femme': 0, 'Autre': 0}
                stats['percentages'] = {'Homme': 0, 'Femme': 0, 'Autre': 0}
                
                # Calcul des statistiques
                for result in results:
                    sexe = result['sexe']
                    count = result['count']
                    stats['by_gender'][sexe] = count
                    
                    # Calcul du pourcentage
                    if total_count > 0:
                        percentage = round((count / total_count) * 100, 1)
                        stats['percentages'][sexe] = percentage
                
                return jsonify({
                    'success': True,
                    'statistics': stats
                }), 200
                
        except pymysql.Error as e:
            logger.error(f"ERREUR MYSQL lors des statistiques: {e.args}", exc_info=True)
            return jsonify({
                'success': False,
                'message': 'Erreur de base de données',
                'code': e.args[0] if e.args else 'unknown'
            }), 500
        finally:
            if conn:
                conn.close()
                logger.debug("Connexion fermée après récupération des statistiques")
                
    except Exception as e:
        logger.error(f"ERREUR SERVEUR lors des statistiques: {str(e)}", exc_info=True)
        return jsonify({
            'success': False,
            'message': 'Erreur interne du serveur',
            'error': str(e)
        }), 500

@app.route('/api/debug', methods=['GET'])
def debug():
    """
    Endpoint de débogage pour vérifier l'état de la base de données
    Cette route utilitaire permet de diagnostiquer les problèmes de base de données
    Elle affiche la structure de la table et les derniers enregistrements
    """
    try:
        conn = get_db()
        with conn.cursor() as cursor:
            # Affichage de la structure de la table
            cursor.execute("SHOW CREATE TABLE patients")
            table_structure = cursor.fetchone()
            
            # Comptage total des patients
            cursor.execute("SELECT COUNT(*) as count FROM patients")
            count = cursor.fetchone()['count']
            
            # Récupération des 5 derniers enregistrements pour vérification
            cursor.execute("SELECT * FROM patients ORDER BY id DESC LIMIT 5")
            last_records = cursor.fetchall()
            
        return jsonify({
            'success': True,
            'table_structure': table_structure['Create Table'],
            'count': count,
            'last_records': last_records
        })
    except Exception as e:
        logger.error(f"ERREUR DEBUG: {str(e)}", exc_info=True)
        return jsonify({'success': False, 'error': str(e)}), 500
    finally:
        if conn:
            conn.close()
            logger.debug("Connexion debug fermée")

# Point d'entrée principal de l'application
if __name__ == '__main__':
    # Vérification de la base de données avant le démarrage du serveur
    if not verify_database():
        logger.critical("Échec de la vérification de la base de données")
        print("ERREUR: Impossible de se connecter à la base de données MySQL")
        print("Assurez-vous que XAMPP est démarré et que MySQL fonctionne")
        exit(1)
    
    print("🚀 Serveur Flask démarré avec succès!")
    print("📊 Base de données vérifiée et prête")
    print("🌐 Serveur accessible sur: http://localhost:5000")
    print("📝 Logs disponibles dans: flask.log")
    
    # Démarrage du serveur Flask en mode debug
    # host='0.0.0.0' permet l'accès depuis d'autres machines du réseau
    # port=5000 est le port standard pour Flask
    # debug=True active le rechargement automatique et les messages d'erreur détaillés
    app.run(host='0.0.0.0', port=5000, debug=True)