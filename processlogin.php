<?php


$email = $_POST['email'];
$Password = $_POST['password'];

if(empty($email) || empty($Password))
{
    echo "please complete the fields";
}else{
    // create an object of the class
    
    include_once("user.php");
    $user = new User();
    $result = $user->login($email,$Password);
   
    if ($result == true)
    {
        echo "Login successful";
    }else{
        echo "Error trying to login... Try again later";
    }

}


?>