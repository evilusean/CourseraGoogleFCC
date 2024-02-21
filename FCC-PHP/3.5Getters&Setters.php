<!DOCTYPE php>
<html>
<head>
  <title>Getters & Setters</title>
</head>
<body>
    <?php
    class Movie {
        #visibility modifier, public means it can be accessed from anywhere
        public $title;
        public $rating;
        #constructor
        function __construct($title, $rating) {
            $this->title = $title;
            $this->setRating($rating);
        }
        #gets the rating
        function getRating() {
            return $this->rating;
        }

        #makes it so you can only set to certain ratings
        #if you choose an invalid rating, defaults to NR
        function setRating($rating) {
            if ($rating == "G" || $rating == "PG" || $rating == "PG-13" || $rating == "R") {
                $this->rating = $rating;
            } else {
                $this->rating = "NR";
            }
        }
    }
    $avengers = new Movie("Avengers", "PG-13");
    echo $avengers->getRating();
    $avengers->setRating("Dog");
    echo $avengers->getRating();
    ?>
</body>
</html>