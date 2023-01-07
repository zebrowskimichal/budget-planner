<?php
    include "conn.php";
    echo "<section id='filters'><div>";
    //Date inputs
    echo "<h4 class='filtersText'>Select start date:</h4>
    <input type='date' id='start' name='date-start'
    value='echo date('Y-m-d')' class='formInputs'>
    <h4 class='filtersText'>Select ending date:</h4>
    <input type='date' id='end' name='date-end'
    value='echo date('Y-m-d')' class='formInputs'>";
    //Shop select checkboxes
    echo "<h4 class='filtersText'>Select shops:</h4>";
    $question = mysqli_query($base, "SELECT * FROM shops;");
    while($answer = mysqli_fetch_assoc($question)){
        echo "<input type='checkbox' name='filterShops' value='".$answer["shop"]."'><h5 class='checkboxLabel'>".$answer["shop"]."</h5>";
    }
    //Total spendings input
    echo "<h4 class='filtersText'>Total, between:</h4>
    <input type='number' name='min-price' class='formInputs'>
    <h4 class='filtersText'>And:</h4>
    <input type='number' name='max-price' class='formInputs'></br></br>";
    //Filter button
    echo "<input type='button' onclick='filter()' value='Filter' class='blue-buttons' id='filteringButton'></div></section>";
?>