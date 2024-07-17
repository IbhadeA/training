<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    // security
    session_start();
    if(isset($_SESSION['websecurity']) && $_SESSION['websecurity'] == "123@@abc"){

    } else{ 
        header("location:login.php");
        exit();

    }
     // security

    include_once("user.php");
    $user = new User();
    $allUsers = $user->getAllUsers();

  
    $name= $_SESSION['firstname'];
    ?>
    <h1>Good Evening <?php echo $name ?> </h1>

    <table>
        <thead>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th colspan="2">Action</th>
        </thead>
        <tbody>
            <?php
            $number=1;
            foreach($allUsers as $users){
            ?>
            <tr>
                <td><?php echo $number++?></td>
                <td><?php echo $users['firstname']?> </td>
                <td><?php echo $users['lastname']?></td>
                <td><?php echo $users['email']?></td>
                <td><?php echo $users['phone_number']?></td>
                <td><a href="edituser.php?id=<?php echo $users["id"]?>">Edit</a></td>
                <td><a href="deleteuser.phpid=<?php echo $users["id"]?>">Delete</a></td>
            </tr>
            <?php
            }
            ?>
            <!-- Displaying data into dropdown (Sandwich method) -->
            <select>
                <?php 
                foreach($allUsers as $users){
                ?> 
                <option value="<?php echo $users['firstname'] ?>"><?php echo $users['firstname'] . ' ' . $users['lastname'] . ' ' . $users['phone_number']?></option>
                <?php 
                }
                ?>
            </select>

            <!-- Displaying data into checkboxes (Sandwich method) -->
                <?php 
                foreach($allUsers as $users){
                    ?> 
                    <div>
                        <input type="checkbox" id="<?php echo $users['firstname']; ?>" name="users[]" value="<?php echo $users['firstname']; ?>">
                        <label for="<?php echo $users['firstname']; ?>">
                        <?php echo $users['firstname'] . ' ' . $users['lastname'] . ' ' . $users['phone_number']; ?>
                        </label>
                    </div>
                    <?php 
                    }
                    ?>
                    
          

        </tbody>
    </table>
    
</body>
</html>