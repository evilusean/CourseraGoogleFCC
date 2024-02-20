<!DOCTYPE php>
<html>
<head>
  <title>Object Functions</title>
</head>
<body>
    <?php
    class Student {
      var $name;
      var $major;
      var $gpa;

      function __construct($name, $major, $gpa) {
        $this->name = $name;
        $this->major = $major;
        $this->gpa = $gpa;
      }

      function hasHonors() {
        #how to check with $this keyword
        if ($this->gpa >= 3.5) {
          return "true";
        }
        return "false";
      }
    }
    $student1 = new Student("John", "Business", 2.8);
    $student2 = new Student("William", "Art", 3.6);

    #call the function and check if student has honors
    echo $student1->hasHonors();    
    echo "<br>";
    echo $student2->hasHonors();
    ?>
</body>
</html>