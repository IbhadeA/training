<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php

include_once("constant.php");
class User{

    public $dbcon;

	//connecting to Db

	function __construct()
	{
		$this->dbcon = new mysqli(DB_SERVER_NAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
		if ($this->dbcon->connect_error) {
			die("Connection Not Successful" . $this->dbcon->connect_error);
		} else {
			// echo "Connection Successful";
		}
	}  

    public function register($firstname,$lastname,$email,$phoneNumber,$Password)
    {
        $hashedpassword=password_hash($Password, PASSWORD_DEFAULT);
       $sql = "INSERT into user SET firstname= '$firstname', lastname='$lastname', email='$email', phone_number='$phoneNumber', Password='$hashedpassword'";
    
       $dbcon = $this->dbcon->query($sql);
       if($this->dbcon->affected_rows ==1){
        return true;
       } else {
        return false;
       }
    }


    public function login($email,$password)
    {
        $sql = "SELECT * FROM user WHERE email= '$email'";
        $dbcon = $this->dbcon->query($sql);
        if($this->dbcon->affected_rows ==1){
            $row= $dbcon->fetch_assoc();
            $hashedpassword=$row['Password'];
            $result= password_verify($password,$hashedpassword);
            session_start();
            $_SESSION['firstname']=$row['firstname'];
            $_SESSION['id']=$row['id'];
            $_SESSION['websecurity'] = "123@@abc";
            if($result){
                return true;
            } else {
                return false;
            }


        }
    }

    public function getAllUsers()
    {
        $sql = "SELECT * FROM user";
        $dbcon = $this->dbcon->query($sql);
        $result = array();
        if($this->dbcon->affected_rows >0){
        while($row= $dbcon->fetch_assoc()){
            $result[] = $row;
                 }
                 return $result;
        }else{
            return $result;
        }
    }

   public function getSingleUser($id)
   {
    $sql = "SELECT * FROM user WHERE id= '$id'";
    $dbcon = $this->dbcon->query($sql);
    if($this->dbcon->affected_rows ==1){
        $row= $dbcon->fetch_assoc();
        return $row;
       } else {
        return false;
       }
   } 

}



?>