<?php
    include "conn.php";
    $question = mysqli_query($base, "SELECT * FROM data;");
    echo "<table class='table'>
        <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Shop</th>
            <th>Total</th>
        </tr>";
    while($answer = mysqli_fetch_assoc($question)){
        echo "<tr>";
        echo "<td>".$answer['id']."</td><td>".$answer['date']."</td><td>".$answer['shop']."</td><td>".$answer['total']."</td>";
        echo "</tr>";
    }
    echo "</table>"
?>