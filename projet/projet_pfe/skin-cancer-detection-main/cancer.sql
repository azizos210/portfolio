-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 02 juin 2025 à 19:29
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cancer`
--

-- --------------------------------------------------------

--
-- Structure de la table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `sexe` enum('Homme','Femme','Autre') NOT NULL,
  `date_creation` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `patient`
--

INSERT INTO `patient` (`id`, `nom`, `prenom`, `date_naissance`, `sexe`, `date_creation`) VALUES
(1, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 01:01:10'),
(2, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 01:03:48'),
(3, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 01:07:25');

-- --------------------------------------------------------

--
-- Structure de la table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `sexe` enum('Homme','Femme','Autre') NOT NULL,
  `date_creation` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `patients`
--

INSERT INTO `patients` (`id`, `nom`, `prenom`, `date_naissance`, `sexe`, `date_creation`) VALUES
(1, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 01:17:37'),
(2, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 01:21:23'),
(3, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 01:27:40'),
(4, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 01:30:39'),
(5, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 09:05:22'),
(6, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:12:00'),
(7, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 09:16:04'),
(8, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:20:45'),
(9, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 09:26:52'),
(10, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:28:50'),
(11, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:28:51'),
(12, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:28:51'),
(13, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:28:51'),
(14, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 09:37:17'),
(15, 'aziz', 'mhamdi', '2000-02-22', 'Homme', '2025-05-28 09:37:43'),
(16, 'aziz', 'mhamdi', '2000-02-22', 'Homme', '2025-05-28 09:37:43'),
(17, 'dssdfdserre', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 09:40:41'),
(18, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 09:48:11'),
(19, 'Doe', 'John', '1990-01-01', 'Homme', '2025-05-28 09:51:09'),
(20, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 09:55:29'),
(21, 'ela', 'lahwel', '2000-02-20', 'Femme', '2025-05-28 09:56:08'),
(22, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 10:07:00'),
(23, 'ela', 'mhamdi', '2000-02-22', 'Femme', '2025-05-28 10:07:26'),
(24, 'aziz', 'erer', '2000-02-01', 'Homme', '2025-05-28 10:09:46'),
(25, 'aziz', 'erer', '2001-02-22', 'Homme', '2025-05-28 10:21:28'),
(26, 'dssdfdserre', 'xwcxwù', '2001-01-01', 'Homme', '2025-05-28 10:36:13'),
(27, 'dssdfdserre', 'mhamdi', '2025-05-16', 'Homme', '2025-05-28 10:41:41'),
(28, 'aziz', 'erer', '2025-05-10', 'Homme', '2025-05-28 11:02:06'),
(29, 'aziz', 'erer', '2025-05-03', 'Homme', '2025-05-28 12:16:34'),
(30, 'insaf', 'mhamdi', '2000-02-02', 'Femme', '2025-05-28 12:17:13'),
(31, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 12:36:04'),
(32, 'assma', 'mhamdi', '2001-02-02', 'Femme', '2025-05-28 12:37:12'),
(33, 'aziz', 'erer', '2025-05-17', 'Homme', '2025-05-28 12:38:23'),
(34, 'aziz', 'mhamdi', '2000-02-20', 'Homme', '2025-05-28 13:02:10'),
(35, 'aziz', 'mhamdi', '2001-02-02', 'Homme', '2025-05-28 13:04:03'),
(36, 'aziz', 'mhamdi', '2025-05-24', 'Homme', '2025-05-28 13:13:44'),
(37, 'aziz', 'mhamdi', '2025-05-24', 'Homme', '2025-05-28 13:13:55'),
(38, 'azfdgfdkgjfdlkgjdfklgjfglk', 'erer', '2000-02-22', 'Homme', '2025-05-28 13:14:17'),
(39, 'aziz', 'mhamdi', '2000-02-02', 'Homme', '2025-05-28 14:49:52'),
(40, 'xvxdgg', 'mlml', '2001-01-20', 'Homme', '2025-05-28 15:07:02'),
(41, 'xvxdgg', 'mlml', '2001-01-20', 'Homme', '2025-05-28 15:07:03'),
(42, 'nacer', 'ben ali', '2002-02-03', 'Homme', '2025-05-28 15:17:09'),
(43, 'aziz', 'mhamdi', '1999-02-02', 'Homme', '2025-05-28 23:03:52'),
(44, 'dssdfdserre', 'mhamdi', '2025-05-01', 'Homme', '2025-05-28 23:06:52'),
(45, 'aziz', 'mhamdi', '1990-02-02', 'Homme', '2025-05-28 23:38:56'),
(46, 'aziz', 'erer', '2024-05-30', 'Homme', '2025-05-29 07:40:10'),
(47, 'aziz', 'mhamdi', '2010-01-01', 'Homme', '2025-05-29 07:58:16'),
(48, 'aziz', 'xwcxwù', '2004-02-02', 'Homme', '2025-05-29 16:52:07'),
(49, 'dssdfdserre', 'mhamdi', '2024-03-29', 'Homme', '2025-05-29 18:22:41'),
(50, 'dssdfdserre', 'mhamdi', '2025-04-30', 'Homme', '2025-05-29 18:24:22'),
(51, 'imed', 'bhri', '2000-02-02', 'Homme', '2025-05-30 09:39:40'),
(52, 'ahmed', 'mhamdi', '2000-02-25', 'Homme', '2025-05-30 09:56:43'),
(53, 'ahmed', 'mhamdi', '2000-02-25', 'Homme', '2025-05-30 09:56:44'),
(54, 'aziz', 'erer', '2000-02-20', 'Homme', '2025-05-30 10:20:20'),
(55, 'aziz', 'hkhbjjhbjhgc', '2001-02-20', 'Homme', '2025-05-30 12:25:27'),
(56, 'dfdfs', 'xbxcbx', '2024-07-21', 'Homme', '2025-05-31 09:41:16'),
(57, 'aziz', 'mhamdi', '2024-08-16', 'Homme', '2025-05-31 09:42:20'),
(58, 'aziz', 'mhamdi', '2025-05-10', 'Homme', '2025-05-31 09:53:44'),
(59, 'azerty', 'dfdsgsdg', '2025-05-02', 'Homme', '2025-05-31 10:25:42'),
(60, 'bahri', 'atef', '2025-05-02', 'Autre', '2025-05-31 12:08:34'),
(61, 'ameni', 'hmed', '2025-05-02', 'Homme', '2025-05-31 12:25:15'),
(62, 'aziz', 'mhamdi', '2025-01-01', 'Homme', '2025-06-01 09:55:27'),
(63, 'dssdfdserre', 'erer', '2023-07-02', 'Homme', '2025-06-02 16:19:38');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
