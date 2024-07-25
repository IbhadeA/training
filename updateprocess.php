<?php

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$stateName = $_POST['state_name'];
$newCapitalName = $_POST['new_capital_name'];

if (empty($stateName) || empty($newCapitalName)) {
    echo "Please complete the fields";
} else {
    // Include the class definition and create an object of the class
    include_once("states_capital.php");
    $statecapital = new StateCapitalRegistry();
    $update = $statecapital->updateStateCapital($stateName, $newCapitalName);

    if ($update === true) {
        echo "Update successful";
    } else {
        echo "Error trying to update... Try again later";
    }
}

?>
