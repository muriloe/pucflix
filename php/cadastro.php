<?php
    require("dataBaseConn.php");

   if($_GET['bandeira']){
        Database::initialize();
        $sql = "SELECT * FROM bandeiras";
        $sth = mysqli_query(Database::$conn, "SELECT * FROM bandeiras");
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);

    }
    
     if($_POST['email']){
          Database::initialize();
         $sql = "INSERT into usuarios (email, senha, nome, num_cartao, fk_bandeira_cartao) 
        VALUES ('".$_POST['email']."','"
                .$_POST['senha']."','"
                .$_POST['nome']."','"
                .$_POST['cCredito']."','"
                .$_POST['bandeira']."');";
         $sth = mysqli_query(Database::$conn, $sql);
         
        if ($sth === TRUE) {
            echo "1";
        } else {
            echo "0";
        }
     }
    
?>