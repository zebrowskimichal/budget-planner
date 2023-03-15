<?php
    include "head.html";
    echo "<body>
            <a href=''><h1 class='mainText'>Budget Planner</h1></a>
            <!-- Form section -->
            <section class='formSection'>
                <label for='date'>Date:</label>
                <input type='date' name='date' id='date' class='formInputs'/>
                </br></br>
                <label for='shop'>Shop:</label>";
                echo "<select name='shop' class='shopInput' id='shopInput'>";
                include 'shops.php';
                echo "</select>";
                echo "<input type='button' value='Add' onclick='addShop()' id='shopButton' class='blue-buttons'>";
                echo "<input type='button' value='-' id='hideButton' class='blue-buttons' onclick='hideShopAdding()'";
                echo "</br></br>
                <label for='total'>Total:</label>
                <input type='number' name='total' id='total' class='formInputs'/>
                </br></br>
                <input type='submit' value='Save' onclick='save()' class='blue-buttons'>
                <a href=''><input type='button' value='Refresh data' class='blue-buttons'></a>
                <input type='button' value='Show fiters' onclick='filters()' class='blue-buttons' id='filter-button'>
                <input type='button' value='This month' onclick='thisMonth()' class='blue-buttons' id='thisMonth-button'>
                </br>";
                include 'shops-checkbox.php';
            echo "</section></br></br>
            <!-- The budget planner data will be displayed here -->
            <section class='sectionTable'>";
    include "load.php";

    echo "
        </table>
        </body>
        </html>";