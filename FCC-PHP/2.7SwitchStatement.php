<!DOCTYPE php>
<html>
<head>
  <title>Switch Statement</title>
</head>
<body>
<form action="test.php" method="post">
   What was your grade?
   <input type="text" name="grade">
   <input type="submit">
</form>
    <?php 
      $grade = $_POST["grade"];
      switch($grade) {
        case "A":
          echo "You did amazing!";
          break;
        case "B":
          echo "You did pretty good!";
          break;
        case "C":
          echo "You did poorly!";
          break;
        case "D":
          echo "You did very bad!";
          break;
        case "F":
          echo "You fail this course!";
          break;
        default:
          echo "Invalid grade!";
      }
    ?>
</body>
</html>