<?php
session_start();
$dbname = 'chatbot';
if (PHP_OS == 'WINNT') {
    try {
        $bdLink = new PDO('mysql:host=localhost;dbname=chatbot;charset=utf8', 'root', '');
        $bdLink->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $bdLink->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $_SESSION['db'] = 'Database Connected';
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
        $_SESSION['db'] = 'Error!';
    }
} else if (PHP_OS == 'Darwin') {
    try {
        $bdLink = new PDO('mysql:host=localhost;dbname=chatbot;charset=utf8', 'root', 'root');
        $bdLink->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $bdLink->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $_SESSION['db'] = 'Database Connected';
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
        $_SESSION['db'] = 'Error!';
    }
}
