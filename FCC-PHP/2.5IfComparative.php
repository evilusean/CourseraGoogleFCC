<!DOCTYPE php>
<html>
<head>
  <title>If Comparative Statements</title>
</head>
<body>
</form>
  <?php 
    function getMax($num1, $num2, $num3){
      if($num1 >= $num2 && $num1 >= $num3){
        return $num1;
      } elseif($num2 >= $num2 && $num2 >= $num3){
        return $num2;
      }
      else {
        return $num3;
      }
    }
    echo getMax(50,25,75);
  ?>
</body>
</html>