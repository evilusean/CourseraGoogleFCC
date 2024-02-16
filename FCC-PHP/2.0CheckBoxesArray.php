<!DOCTYPE php>
<html>
<head>
  <title>Checkboxes and Arrays</title>
</head>
<body>
    <form action="test.php" method="post">
    Select your favorite fruits:<br>
    Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
    Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
    Pears: <input type="checkbox" name="fruits[]" value="pears"><br>
    Bananas: <input type="checkbox" name="fruits[]" value="bananas"><br>
        <input type="submit">
    </form>
    <?php 
    $fruits = $_POST["fruits"]; 
    #creates a variable from all checked fruits in array fruits[]
    echo $fruits[0]; #checks first fruit
    echo $fruits[1]; #checks second fruit
    echo $fruits[2];   
    echo $fruits[3];
    ?>
</body>
</html>