<?php
    include "conn.php";
    echo "<section id='filters'><div>";
    echo "Select date from:</br>
    <input type='date' id='start' name='trip-start'
    value='echo date('Y-m-d')'>
    ,To:
    <input type='date' id='end' name='trip-start'
    value='echo date('Y-m-d')'>";
    
    $question = mysqli_query($base, "SELECT * FROM shops;");
    while($answer = mysqli_fetch_assoc($question)){
        echo "<input type='checkbox' value='".$answer["shop"]."'>".$answer["shop"]."</input>";
    }
    echo "Total, between:
    <input type='number' name='min-price'>
    And
    <input type='number' name='max-price'>";
    echo "<input type='button' onclick='' value='Filter' class='blue-buttons'></div></section>";
?>