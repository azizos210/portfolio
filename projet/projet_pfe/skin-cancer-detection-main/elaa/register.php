<?php
header('Content-Type: application/json');

// Configuration du logging
$logFile = 'php_register.log';
function logMessage($message) {
    global $logFile;
    file_put_contents($logFile, date('Y-m-d H:i:s') . " - $message\n", FILE_APPEND);
}

logMessage("Requête reçue: " . file_get_contents('php://input'));

// Décoder les données JSON reçues
$data = json_decode(file_get_contents('php://input'), true);
if ($data === null) {
    logMessage("Erreur: Données JSON invalides");
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données JSON invalides']);
    exit;
}

$flask_url = 'http://localhost:5000/api/register';

$ch = curl_init($flask_url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($data),
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_FAILONERROR => false, // Ne pas échouer sur les codes HTTP d'erreur
    CURLOPT_VERBOSE => true, // Activer le mode verbeux pour le débogage
]);

// Capturer la sortie verbeuse
$verbose = fopen('php://temp', 'w+');
curl_setopt($ch, CURLOPT_STDERR, $verbose);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Capturer les informations verbeuses
rewind($verbose);
$verboseLog = stream_get_contents($verbose);
fclose($verbose);
logMessage("cURL Verbose: " . $verboseLog);
logMessage("Réponse Flask: " . $response);
logMessage("Code HTTP: " . $httpCode);

curl_close($ch);

http_response_code($httpCode);
echo $response;
?>