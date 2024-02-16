<!DOCTYPE php>
<html>
<head>
  <title>Associated Arrays</title>
</head>
<body>
<form action="test.php" method="post">
    Enter Name: <input type="text" name="student">
    <input type="submit">
</form>
    <?php 
    $grades = array("Jim"=>"A", "Bill"=>"B-", "Sue"=>"C+");
    $grades["Jim"] = "F"; #allows you to change jims grade
    #echo count($grades); #shows number of elements in array
    echo $grades[$_POST["student"]]; 
    #will print out grade of student typed into text input
    ?>
</body>
</html>