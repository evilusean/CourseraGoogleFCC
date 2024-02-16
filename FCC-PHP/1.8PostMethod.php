<!DOCTYPE php>
<html>
<head>
  <title>ZoomZoom Madlibs</title>
</head>
<body>
<form action="test.php" method="post"> 
    Enter a Password : <input type="password" name="password">
    <br>
    <input type="submit">
</form>
<br>
Password is: <?php 
echo $_POST["password"]
?>
</body>
</html>