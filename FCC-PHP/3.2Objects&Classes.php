<!DOCTYPE php>
<html>
<head>
  <title>Classes & Objects</title>
</head>
<body>
    <?php
    class Book {
        var $title;
        var $author;
        var $pages;
    }
    $book1 = new Book;
    $book1->title = "Tragedy and Hope"; 
    #creates a title for the new book1 object variable
    $book1->author = "Carroll Quigley"; 
    #adds an author to book1 class
    $book1->pages = 2000; 
    #adds pages to the $book1 object variable
    echo $book1->title; #prints out $book1 variable object title
    echo $book1->author; #prints out $book1 variable object author
    echo $book1->pages; #prints out $book1 variable object pages
    
    $book2 = new Book;
    $book2->title = "The Anglo-American Establishment";
    $book2->author = "Carroll Quigley"; 
    $book2->pages = 250; 
    echo $book2->title; 
    echo $book2->author; 
    echo $book2->pages; 
    ?>
</body>
</html>