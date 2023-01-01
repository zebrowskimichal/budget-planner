<?php
    if(isset($_GET)){
        include 'conn.php';
        $shop = $_GET['shop'];
        mysqli_query($base, "INSERT INTO `shops`(`id`, `shop`) VALUES (']','$shop')");
        echo "Inserted value: '$shop' ";
    }
?>