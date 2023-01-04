<?php
    include "head.html";
    echo "<body>
            <a href=''><h1>Budget Planner</h1></a>
            <!-- Form section -->
                <label for='date'>Date:</label>
                <input type='date' name='date' id='date' />
                </br></br>
                <label for='shop'>Shop:</label>";
                echo "<select name='shop'>";
                include 'shops.php';
                echo "</select>";
                echo "<input type='button' value='Add' onclick='addShop()' id='shopButton' class='blue-buttons'>";
                echo "</br></br>
                <label for='total'>Total:</label>
                <input type='number' name='total' id='total' />
                </br></br>
                <input type='submit' value='Save' onclick='save()'>
                <a href=''><input type='button' value='Refresh data' class='blue-buttons'></a>
                <input type='button' value='Show fiters' onclick='filters()' class='blue-buttons' id='filter-button'>
                </br>";
                include 'shops-checkbox.php';
            echo "</br></br>
            <!-- The budget planner data will be displayed here -->";
    include "load.php";

    echo "
        </table>
        </body>
        </html>";