<?php
require("dataBaseConn.php");
    
    //se o post tiver titulo significa que esta salvando um no filme
    if($_POST['titulo']){
        Database::initialize();
        $db=Database::$conn;
        $video = 'a';
        if(!$_POST['video_url']){
            $video = 'https://www.youtube.com/watch?v=2Z4m4lnjxkY';
        }
        else{
            $video = $_POST['video_url'];
        }
        $sql = "INSERT into filmes (titulo, ano, autor, img_url, video_url, fk_genero) 
                VALUES ('".$_POST['titulo']."','"
                        .$_POST['ano']."','"
                        .$_POST['autor']."','"
                        .$_POST['urlFoto']."','"
                        .$_POST['video_url']."','"
                        .$_POST['genero']."');";

        $sth = mysqli_query($db, $sql);
        $last_id = mysqli_insert_id( $db );
        
        if ($sth === TRUE) {
            echo $last_id;
        } else {
            echo "0";
        }
    }
    
    if($_GET['genero']){
        Database::initialize();
        $sql = "SELECT * FROM generos";
        $sth = mysqli_query(Database::$conn, "SELECT * FROM generos");
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);

    }
    
    //salvar um novo genero
    if($_POST['nome']){
        Database::initialize();
        $nomeUpper = strtoupper($_POST['nome']);
        $sql = "INSERT into generos (nome) VALUES ('".$nomeUpper."');";
        $sth = mysqli_query(Database::$conn, $sql);
        if ($sth === TRUE) {
            echo "1";
        } else {
            echo "0";
        }
    }
    
    if($_GET['carregarTabela']){
        Database::initialize();
        $sql = "SELECT filmes.id, titulo, autor, ano, img_url, video_url, nome FROM filmes INNER JOIN generos ON filmes.fk_genero = generos.id";
        $sth = mysqli_query(Database::$conn, $sql);
        $rows = array();
        while($r = mysqli_fetch_assoc($sth)) {
            $rows[] = $r;
        }
        print json_encode($rows);

    }
    
    if($_GET['deletar']){
        Database::initialize();
        $id= $_GET['deletar'];
        $sql1 = "DELETE from filmes where id=".$id;
        echo $sql1;
        $sth = mysqli_query(Database::$conn, $sql1);
        echo "1";

    }

?>