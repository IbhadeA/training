<?php


$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phoneNumber = $_POST['phone_number'];

if(empty($firstname) || empty($lastname) || empty($email) || empty($phoneNumber))
{
    echo "please complete the fields";
}else{
    // create an object of the class
    
    include_once("user.php");
    $user = new User();
    $reg = $user->register($firstname,$lastname,$email,$phoneNumber);
   
    if ($reg == true)
    {
        echo "Registration successful";
    }else{
        echo "Error trying to register... Try again later";
    }

}


?>