<?php
    include "config.php";
    try{
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);
        $message = array();
        $idProducto = $data["idProducto"];
        $cantidad = $data["cantidad"];
        $idUsuario = $data["idUsuario"];
        $q = mysqli_query($con, "INSERT INTO ventacarrito (idProducto,cantidad,idUsuario) VALUES ($idProducto,$cantidad,$idUsuario);");

        if($q){
            http_response_code(201);
            $message['status']="Success";
        }else{
            http_response_code(422);
            $message['status']="Error";
        }

        echo json_encode($message);
        echo mysqli_error($con);

    }catch(Exception $error){
        echo $error;
        throw $error;
    }