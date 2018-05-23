<?php
    $ipServidor = "127.0.0.1:3306";
    $usuario = "murilo0121";
    $senha = "";
    $nomeDb ="pucflix";
    
  
    
    $isServerCreated =  createDataBase($ipServidor, $usuario, $senha, $nomeDb);
    if($isServerCreated === 1){
        createTables($ipServidor, $usuario, $senha, $nomeDb);
    }
    
    function createDataBase($ipServidor, $usuario, $senha, $nomeDb){
        $servername = $ipServidor;
        $username = $usuario;
        $password = $senha;

        // Create connection
        $conn = new mysqli($servername, $username, $password);
        
          $drop = "DROP DATABASE pucflix;";
        if ($conn->query($drop) === TRUE) {
                echo "<br>DROPOU TUDO<br>";
            } else {
                echo "<br>Error AO DROPOU TUDO " . $conn->error;
        }
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        // Create database
        $sql = "CREATE DATABASE ". $nomeDb;
        if ($conn->query($sql) === TRUE) {
            echo "<br>Criou a database <br>";
            return 1;

        } else {
            echo "<br>Erro: " . $conn->error;
            return 0;
        }

        $conn->close();
    }
    
    function createTables($ipServidor, $usuario, $senha, $nomeDb){
        $servername = $ipServidor;
        $username = $usuario;
        $password = $senha;
        $dbname = $nomeDb;
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("<br>Connection failed: " . $conn->connect_error);
        }   
        
         // sql to create bandeiras
        $sql = "CREATE TABLE bandeiras (
                        id int PRIMARY KEY NOT NULL AUTO_INCREMENT, 
                        bandeira VARCHAR(45) NOT NULL
        )";
        
        if ($conn->query($sql) === TRUE) {
            echo "<br>Table bandeiras created successfully<br>";
        } else {
            echo "<br>Error creating table bandeiras: " . $conn->error;
        }
        
       
        
        $sql3 = "CREATE TABLE generos (
                        id int PRIMARY KEY NOT NULL AUTO_INCREMENT, 
                        nome VARCHAR(45) NOT NULL
        )";
        
        if ($conn->query($sql3) === TRUE) {
            echo "<br>Table generos: created successfully<br>";
        } else {
            echo "<br>Error creating table generos:: " . $conn->error;
        }
        
        $sql4 = "CREATE TABLE filmes (
                        id int PRIMARY KEY NOT NULL AUTO_INCREMENT, 
                        titulo VARCHAR(45) NOT NULL, 
                        ano INT NOT NULL, 
                        autor VARCHAR(45) NOT NULL, 
                        img_url VARCHAR(45) NOT NULL, 
                        fk_genero int NOT NULL,
                        FOREIGN KEY (fk_genero) REFERENCES generos(id)
        )";
        
        
        
         if ($conn->query($sql4) === TRUE) {
            echo "<br>Table filmes: created successfully<br>";
        } else {
            echo "<br>Error creating table filmes:: " . $conn->error;
        }
        
          // sql to create bandeiras
        $sql2 = "CREATE TABLE usuarios (
                        id int PRIMARY KEY NOT NULL AUTO_INCREMENT, 
                        email VARCHAR(45) NOT NULL, 
                        senha VARCHAR(45) NOT NULL, 
                        nome VARCHAR(45) NOT NULL, 
                        num_cartao VARCHAR(45), 
                        fk_bandeira_cartao int, 
                        is_admin INT (1) NOT NULL DEFAULT 0 ,
                        FOREIGN KEY (fk_bandeira_cartao) REFERENCES bandeiras(id)
        )";
        
        if ($conn->query($sql2) === TRUE) {
            echo "<br>Table usuarios: created successfully<br>";
        } else {
            echo "<br>Error creating table usuarios:: " . $conn->error;
        }
        
        $sql5 = "INSERT into bandeiras (bandeira) VALUES ('VISA');";
        if ($conn->query($sql5) === TRUE) {
            echo "<br>Table BANDEIRA POPULADA: created successfully<br>";
        } else {
            echo "<br>Error BANDEIRA POPULADA " . $conn->error;
        }
        
        
        $sql5 = "INSERT into bandeiras (bandeira) VALUES ('MASTER CARD');";
        if ($conn->query($sql5) === TRUE) {
            echo "<br>Table BANDEIRA POPULADA: created successfully<br>";
        } else {
            echo "<br>Error BANDEIRA POPULADA " . $conn->error;
        }
        
        $sql6 = "INSERT into generos (nome) VALUES ('PLANETA PUC');";
        if ($conn->query($sql6) === TRUE) {
            echo "<br>Table generos POPULADA: created successfully<br>";
        } else {
            echo "<br>Error generos POPULADA " . $conn->error;
        }
        
        $sql7 = "INSERT into generos (nome) VALUES ('REVELE SEU TALENTO');";
        if ($conn->query($sql7) === TRUE) {
            echo "<br>Table generos POPULADA: created successfully<br>";
        } else {
            echo "<br>Error generos POPULADA " . $conn->error;
        }
        
        $sql8 = "INSERT into usuarios (email, senha, nome, is_admin) VALUES ('admin@admin.com', 'admin', 'admin', 1);";
        if ($conn->query($sql8) === TRUE) {
            echo "add admin@admin.com senha admin>";
        } else {
            echo "<br>Error admin " . $conn->error;
        }
        
        $sql8 = "INSERT into usuarios (email, senha, nome) VALUES ('murilo0121@gmail.com', '123456', 'Murilo Erhardt');";
        if ($conn->query($sql8) === TRUE) {
            echo "add admin@admin.com senha admin>";
        } else {
            echo "<br>Error admin " . $conn->error;
        }
    }
?>