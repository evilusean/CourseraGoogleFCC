<!DOCTYPE php>
<html>
<head>
  <title>Inheritance</title>
</head>
<body>
    <?php
    class Chef {
        function makeChicken() {
            echo "The chef makes chicken <br>";
        }
        function makeSalad() {
            echo "The chef makes salad <br>";
        }
        function makeSpecialDish() {
            echo "The chef makes bbq ribs <br>";
        }
    }

    class ItalianChef extends Chef {
        function makePasta() {
            echo "The chef makes pasta <br>";
        }
        function makeSpecialDish() {
            echo "The chef makes chicken parm <br>";
        } 
    }
    $chef = new Chef();
    $chef->makeSpecialDish();
    $italianChef = new ItalianChef();
    $italianChef->makeSpecialDish();
    $italianChef->makePasta();

    ?>
</body>
</html>