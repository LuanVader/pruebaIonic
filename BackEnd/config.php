<?php
    // header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description, token');

    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header('Access-Control-Allow-Credentials: false');
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: application/json');

    // if (isset($_SERVER['HTTP_ORIGIN'])) {
    //     // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    //     // you want to allow, and if so:
    //     // header('Access-Control-Allow-Origin: *');
    //     header('Access-Control-Allow-Credentials: false');
    //     header('Access-Control-Max-Age: 1000');
    // }
    // if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    //     if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
    //         // may also be using PUT, PATCH, HEAD etc
    //         header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    //     }
    
    //     if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
    //         header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    //     }
        
    // //     exit(0);
    // }

    $con = mysqli_connect("127.0.0.1","root","root","carritocompras","33306") or die("could not connect DB");