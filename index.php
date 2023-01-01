<?php
    include "head.html";
    echo "<body>
            <h1>Budget Planner</h1>
                <label for='date'>Date:</label>
                <input type='date' name='date' id='date' />
                </br></br>
                <label for='shop'>Shop:</label>";
                echo "<select name='shop'>";
                include 'shops.php';
                
                echo "<select>";
                echo "<div><input type='button' value='add' onclick='addShop()' id='shopButton'><div>";
                echo "</br></br>
                <label for='total'>Total:</label>
                <input type='number' name='total' id='total' />
                </br></br>
                <input type='submit' value='Save' onclick='shops()'/>
            </br></br>";

    include "load.php";
         echo "<!-- The budget planner data will be displayed here -->";
    echo "
        </table>
        </body>
        </html>";