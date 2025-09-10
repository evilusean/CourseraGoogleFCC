<?php

// This line defines the namespace for the file. Namespaces help organize classes and prevent naming conflicts.
// In this case, the `Post` model belongs to the `App\Models` namespace.
namespace App\Models;

// This line imports the `HasFactory` trait. This trait is a key part of Laravel's Eloquent ORM.
// It provides a static method (`::factory()`) that allows you to create new instances of the `Post` model
// using a model factory, which is essential for generating fake data for testing and database seeding.
use Illuminate\Database\Eloquent\Factories\HasFactory;

// This line imports the `Model` base class from Laravel's Eloquent.
// All custom model classes must extend this base `Model` class to inherit the rich set of functionality
// for interacting with a database table, such as methods for querying, inserting, updating, and deleting records.
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

// This is the `Post` model class. It represents the `posts` table in your database.
// By extending `Illuminate\Database\Eloquent\Model`, it gains access to all the features of Eloquent.
// Each instance of the `Post` class corresponds to a single row in the `posts` table.
class Post extends Model
{
    // The `use HasFactory;` statement includes the `HasFactory` trait within the `Post` model.
    // This gives the `Post` model the ability to use the `::factory()` method.
    // For example, you can now call `Post::factory()->create()` to create a new post record
    // in your database based on the data defined in its corresponding factory file.
    use HasFactory;

    protected $fillable = [
        'image',
        'title',
        'slug',
        'content',
        'category_id',
        'user_id',
        'published_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function readTime($wordsPerMinute = 100)
    {
        $wordCount = str_word_count(strip_tags($this->content));
        $readingTimeMinutes = ceil($wordCount / $wordsPerMinute); // Assuming an average reading speed of 200 words per minute
        return max (1, $readingTimeMinutes);
    }

    public function imageUrl()
    {
        if ($this->image) {
            return Storage::url($this->image);
        }
        return null;
    }
}