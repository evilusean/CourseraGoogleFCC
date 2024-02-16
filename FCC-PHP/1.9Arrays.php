<!DOCTYPE php>
<html>
<head>
  <title>Arrays</title>
</head>
<body>
    <?php 
        $fiends = array("John", "Shawn", "Sean", "Jim");
        echo $fiends[0];
        echo "<br>";
        echo $fiends[1];
        echo "<br>";
        echo $fiends[2];
        echo "<br>";
        echo $fiends[3];
        echo "<br>";
        echo count($fiends);
        echo "<br>";
        $fiends[3] = "JimBob";
        echo $fiends;
    ?>
</body>
</html>