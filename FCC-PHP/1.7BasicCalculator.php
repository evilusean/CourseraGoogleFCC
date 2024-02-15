<!DOCTYPE html>
<html>
<head>
  <title>Basic Calculator</title>
</head>
<body>
    Name: 
<form action="test.php" method="get"> 
    <input type="number" name="num1"> 
    <br>
    <input type="number" name="num2">
    <br>
    <input type="submit">
</form>
<br>
Answer: <?php echo $_GET["num1"] + $_GET["num2"]; ?>
</body>
</html>