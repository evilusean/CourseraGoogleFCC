<!DOCTYPE php>
<html>
<head>
  <title>While Loops</title>
</head>
<body>
    <?php
    $luckyNumbers = array(4, 8, 14, 16, 23, 42);
    #will print out each number in the array
      for ($i = 0; $i < count($luckyNumbers); $i++){
        echo "$luckyNumbers[$i] <br>";
      }
    ?>
</body>
</html>