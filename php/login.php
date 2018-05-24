<?php 
require("dataBaseConn.php");

$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = "SELECT is_admin FROM usuarios WHERE email='".$email."' AND senha='".$senha."'";

Database::initialize();
$result = mysqli_query (Database::$conn, $sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["is_admin"];
    }
}
else{
   echo '2'; 
}


?>