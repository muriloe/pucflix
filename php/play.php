<?php
require("dataBaseConn.php");
    
if($_GET['id']){
    Database::initialize();
    $consulta = "SELECT * FROM filmes WHERE id=".$_GET['id'];
    $sth = mysqli_query(Database::$conn, $consulta);
    $rows = array();
    while($r = mysqli_fetch_assoc($sth)) {
        $rows[] = $r;
    }
    print json_encode($rows);

}

?>