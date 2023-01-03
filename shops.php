<?php
    include "conn.php";
    $question = mysqli_query($base, "SELECT * FROM shops;");
    while($answer = mysqli_fetch_assoc($question)){
        echo "<option value='".$answer["shop"]."'>".$answer["shop"]."</option>";
    }
    echo "<option selected></option>";
?>