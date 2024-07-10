<?php


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
    }else{
        echo "Error trying to register... Try again later";
    }

}


?>