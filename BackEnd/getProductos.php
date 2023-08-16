<?php
    include "config.php";

    try{
        $data = array();
        $q = mysqli_query($con, "SELECT * FROM productos");

        while($row = mysqli_fetch_object($q)){
            $data[]=$row;
        }
    
        echo json_encode($data);
        echo mysqli_error($con);

    }catch(Exception $error){
        throw $error;
    }
    