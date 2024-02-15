<!DOCTYPE html>
<html>
<head>
  <title>ZoomZoom Madlibs</title>
</head>
<body>
<form action="test.php" method="get"> 
    Color : <input type="text" name="color">
    <br>
    Plural Noun: <input type="text" name="pluralNoun">
    <br>
    Color2 : <input type="text" name="color2">
    <br>
    Adjective: <input type="text" name="adjective">
    <br>
    <input type="submit">
</form>
<br>
Answer: <?php 
    $color = $_GET["color"];
    $pluralNoun = $_GET["pluralNoun"];
    $color2 = $_GET["color2"];
    $adjective = $_GET["adjective"];
    echo "Roses are $color No Cap FR FR<br>";
    echo "$pluralNoun are $color2 ong on god <br>";
    echo "Sugar is bussin $adjective as hell <br>";
    echo "And so are you(N SO R U)"
?>
</body>
</html>