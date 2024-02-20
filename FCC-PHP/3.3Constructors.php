<!DOCTYPE php>
<html>
<head>
  <title>Constructor</title>
</head>
<body>
    <?php
    class Book {
        var $title;
        var $author;
        var $pages;

        function __construct($aTitle, $aAuthor, $aPages) {
            $this->title = $aTitle;
            $this->author = $aAuthor;
            $this->pages = $aPages;
        }
    }
    $book1 = new Book("Tragedy and Hope", "Carroll Quigley", 2000);
    
    $book2 = new Book("The Anglo-American Establishment" , "Carroll Quigley", 250);

    ?>
</body>
</html>