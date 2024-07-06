<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php

include_once("constant.php");

class StateCapitalRegistry {

    public $dbcon;

    // Connecting to the database
    function __construct() {
        $this->dbcon = new mysqli(DB_SERVER_NAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
        if ($this->dbcon->connect_error) {
            die("Connection Not Successful: " . $this->dbcon->connect_error);
        } else {
            echo "Connection Successful";
        }
    }  

    public function createStateCapital($state, $capital) {
        $sql = "INSERT INTO statecapital (state_name, capital_name) VALUES ('$state', '$capital')";

        if ($this->dbcon->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    public function deleteStateCapital($state) {
        $sql = "DELETE FROM statecapital WHERE state_name = '$state'";

        if ($this->dbcon->query($sql) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $this->dbcon->error;
        }
    }

    public function updateStateCapital($state, $newCapital) {
        $sql = "UPDATE statecapital SET capital_name = '$newCapital' WHERE state_name = '$state'";
    
        if ($this->dbcon->query($sql) === TRUE) {
            return true;
        } else {
            error_log("Error updating record: " . $this->dbcon->error);
            return false;
        }
    }
    
}

?>
