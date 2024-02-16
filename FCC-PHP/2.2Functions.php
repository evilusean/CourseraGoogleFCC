<!DOCTYPE php>
<html>
<head>
  <title>Functions</title>
</head>
<body>
</form>
  <?php 
    function sayHi ($userName, $age){
      echo "Hello $userName, you are $age. <br>";
    }
    sayHi("Sean", 40);
    sayHi("Shawn", 65);
    sayHi("Shun", 32);
    sayHi("Shaun", 99);
  ?>
</body>
</html>