<!DOCTYPE php>
<html>
<head>
  <title>If Statements</title>
</head>
<body>
</form>
  <?php 
    $isMale = true; #storing a boolean value in a variable
    $isTall = false;
    #checks if both conditions are true
    if ($isMale && $isTall){
      echo "you are a tall male";
    } elseif($isMale && !$isTall){
      #'!'= negation operator, checks if the condition is NOT true
      echo "you are a short male";
    } elseif(!$isMale && $isTall){
      echo "you are a tall female";
    } else {
      echo "you are short female";
    }
    # || or operator, only one condition needs to be true
  ?>
</body>
</html>