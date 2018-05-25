<?php
require("dataBaseConn.php");
   

    
    if($_GET['genero']){
        Database::initialize();
        $sth = mysqli_query(Database::$conn, "SELECT * FROM generos");
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);

    }
    
    
    if($_GET['filmesGenero']){
        Database::initialize();
        $sql = "SELECT * FROM filmes WHERE fk_genero=".$_GET['filmesGenero'];
        $sth = mysqli_query(Database::$conn, $sql);
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);

    }
    
    if($_GET['filme']){
        Database::initialize();
        $sql = "SELECT filmes.id, titulo, autor, ano, img_url, video_url, nome FROM filmes INNER JOIN generos ON filmes.fk_genero = generos.id  WHERE filmes.id=".$_GET['filme'];
        $sth = mysqli_query(Database::$conn, $sql);
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);
    }
    
    if($_POST['busca']){
        Database::initialize();
        $queryComplementar = " WHERE titulo like '%".$_POST['titulo']."%' AND ano like '%".$_POST['ano']."%' AND autor like '%".$_POST['autor']."%'";
        
        $sql = "SELECT * FROM filmes".$queryComplementar;
        $sth = mysqli_query(Database::$conn, $sql);
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);
    }
    

    
?>