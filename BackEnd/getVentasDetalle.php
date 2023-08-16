<?php
    include "config.php";
    try{
        $id = $_GET['id'];
        $data = array();
        $q = mysqli_query($con, "SELECT * FROM ventadetalle where idCabecera = $id;");

        while($row = mysqli_fetch_object($q)){
            $data[]=$row;
        }
    
        echo json_encode($data);
        echo mysqli_error($con);

    }catch(Exception $error){
        throw $error;
    }

