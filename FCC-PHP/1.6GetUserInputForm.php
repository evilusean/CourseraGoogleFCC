<!DOCTYPE html>
<html>
<head>
  <title>Get User Input</title>
</head>
<body>
    Name: <form action="test.php" method="get"> 
<input type="text" name="username">
<br>
Age: <input type="number" name="age">
<br>
<input type="submit">
<br>
Your name is:
  <?php echo $_GET["username"]; ?>
  <br>
Your age is:
  <?php echo $_GET["age"]; ?>
</body>
</html>