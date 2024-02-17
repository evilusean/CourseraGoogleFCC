<!DOCTYPE php>
<html>
<head>
  <title>Return Statement</title>
</head>
<body>
</form>
  <?php 
    function cube ($num){
      return $num * $num * $num;
      echo "Hello"; #will not get printed, return ends function(code after return will not get executed)
    }
    $cubeResult = cube(4);
    echo $cubeResult;
  ?>
</body>
</html>