<?php
    if(isset($_GET)){
        include 'conn.php';
        $date = $_GET['date'];
        $shop = $_GET['shop'];
        $total = $_GET['total'];
        mysqli_query($base, "INSERT INTO `data`(`date`, `shop`, `total`) VALUES ('$date','$shop','$total');");
        echo "Inserted value: '$date','$shop','$total' ";
    }
?>