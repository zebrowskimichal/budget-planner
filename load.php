<?php
    include "conn.php";
    $question = mysqli_query($base, "SELECT * FROM data;");
    echo "<table class='table'>
        <tr>
            <th>Date</th>
            <th>Shop</th>
            <th>Total</th>
        </tr>";
        $i = 0;
    while($answer = mysqli_fetch_assoc($question)){
        echo "<tr id='r".$i."'>";
        echo "<td id='d".$i."'>".$answer['date']."</td><td id='s".$i."'>".$answer['shop']."</td><td id='t".$i."'>".$answer['total']."</td>";
        echo "</tr>";
        $i++;
    }
    echo "</table>"
?>