<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php

$stateName = $_POST['state_name'];
$capitalName = $_POST['capital_name'];

if (empty($stateName) || empty($capitalName)) {
    echo "Please complete the fields";
} else {
    // Create an object of the class
    include_once("states_capital.php");
    $statecapital = new StateCapitalRegistry();
    $reg = $statecapital->createStateCapital($stateName, $capitalName);

    if ($reg === true) {
        echo "Registration successful";
    } else {
        echo "Error trying to register... Try again later";
    }
}

?>
