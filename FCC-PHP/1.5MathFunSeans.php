<!DOCTYPE html>
<html>
<head>
  <title>DataTypes</title>
</head>
<body>
  <?php
$num = 6;
$num2 = $num + $num; #addition
echo "$num + $num = $num2"; 
echo "<br>";
$num3 = $num - $num; #subtraction
echo "$num - $num = $num3";
echo "<br>";
$num4 = $num * $num; #multiplication
echo "$num * $num = $num4";
echo "<br>";
$num5 = $num / $num; #division
echo "$num / $num = $num5";
echo "<br>";
$num6 = $num % $num; #modulus operator : returns the remainder of the division
echo "$num % $num = $num6";
echo "<br>";
$num7 = $num += $num; #addition assignment
echo "$num += $num = $num7";
echo "<br>";
$num8 = $num -= $num; #subtraction assignment
echo "$num -= $num = $num8";
echo "<br>";
$num9 = $num *= $num; #multiplication assignment
echo "$num *= $num = $num9";
echo "<br>";
$num10 = $num /= $num; #division assignment
echo "$num /= $num = $num10";
echo "<br>";
$num11 = $num %= $num; #modulus assignment
echo "$num %= $num = $num11";
echo "<br>";
echo "$num++"; #add 1 to $num
echo "<br>";
echo "$num--"; #subtract 1 from $num
echo "<br>";
echo "++$num"; #add 1 to $num
echo "<br>";
echo "--$num"; #subtract 1 from $num
echo "<br>";
echo abs(-100); #absolute value of -100)
echo "<br>";
echo pow(2, 3); #2 to the power of 3 
echo "<br>";
echo sqrt(144); #square root of 144
echo "<br>";
echo max(2, 3); #maximum value of 2 and 3
echo "<br>";
echo min(2, 3); #minimum value of 2 and 3
echo "<br>";
echo round(0.60); #round off to the nearest integer
echo "<br>";
echo round(0.49); #round off to the nearest integer
echo "<br>";
echo ceil(0.4); #round off to the next highest integer
echo "<br>";
echo floor(0.7); #round off to the next lowest integer
echo "<br>";
echo rand(1, 10); #generate a random number between 1 and 10
echo "<br>";
echo getrandmax(); #maximum value of rand()
echo "<br>";
  ?>
</body>
</html>