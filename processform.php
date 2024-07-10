<?php

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phoneNumber = $_POST['phone_number'];
$Password = $_POST['password'];

if(empty($firstname) || empty($lastname) || empty($email) || empty($phoneNumber)|| empty($Password))
{
    echo "please complete the fields";
}else{
    // create an object of the class
    
    include_once("user.php");
    $user = new User();
    $reg = $user->register($firstname,$lastname,$email,$phoneNumber,$Password);
   
    if ($reg == true)
    {
        echo "Registration successful";
        header("Location: login.php");
    }else{
        echo "Error trying to register... Try again later";
    }

}


?>