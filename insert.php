<?php
    if(isset($_GET)){
        include 'conn.php';
        $id = $_GET['id'];
        $date = $_GET['date'];
        $shop = $_GET['shop'];
        $total = $_GET['total'];
        mysqli_query($base, "INSERT INTO `data`(`id`, `date`, `shop`, `total`) VALUES ('$id','$date','$shop','$total');");
        echo "Inserted value: '$id','$date','$shop','$total' ";
    }
?>