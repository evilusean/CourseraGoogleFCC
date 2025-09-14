<?php

namespace App\Models;

// This line defines the namespace for the file. Namespaces help organize classes and prevent naming conflicts. 
// In this case, the User model belongs to the `App\Models` namespace.

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

// These lines import other classes that are used in this file.
// - `HasFactory`: A trait used by Laravel's Eloquent ORM to allow for creating model factories. 
// This is useful for generating fake data for testing or seeding the database.
// - `Authenticatable`: The base class for a user model in Laravel. It provides the necessary methods for 
// user authentication, such as checking if the user is authenticated, retrieving their ID, and more. 
// This is essential for features like login and user sessions.
// - `Notifiable`: A trait that provides functionality for sending notifications to the user model. 
// It integrates with Laravel's notification system, allowing you to send emails, SMS, or other types of notifications.
// - `MustVerifyEmail`: This line imports the MustVerifyEmail contract (an interface). A contract in Laravel is essentially a 
// set of predefined methods that a class must implement. By implementing this contract, your User model promises to fulfill 
// the requirements for email verification.

class User extends Authenticatable implements MustVerifyEmail
{
    // The `User` class extends `Authenticatable`, inheriting all of its authentication-related functionality.
    // The `implements MustVerifyEmail` part is the key here. It tells Laravel that this model supports email verification.
    // When you register a new user, Laravel will automatically recognize this interface and
    // will know to send an email verification link to the user's email address.
    // This interface also provides the necessary methods like `hasVerifiedEmail()` and `markEmailAsVerified()`
    // which are used by Laravel's built-in email verification routes and middleware.
    // For example, the `verified` middleware that protects certain routes checks if the
    // authenticated user's model implements `MustVerifyEmail` and if their email has been verified.
    // This is a powerful feature that ensures that users have a valid email address before they can
    // access specific parts of your application, which is crucial for security and user management.

    /** * The `HasFactory` trait allows you to create instances of the `User` model using a factory. 
     * For example, you could run `User::factory()->count(10)->create()` to create 10 fake users.
     * The `Notifiable` trait adds methods to the `User` model that enable sending notifications.
     */
    use HasFactory, Notifiable;

    /**
     * The `fillable` property specifies which attributes are allowed to be mass-assigned.
     * Mass assignment is a feature in Laravel that allows you to create or update a model 
     * with an array of data in a single line of code (e.g., `User::create($request->all())`).
     * By listing the attributes here, you prevent malicious users from updating unintended fields, 
     * like changing a user's role to 'admin' through a form request.
     * `name`, `email`, and `password` are the only fields that can be mass-assigned.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'username',
        'image',
        'bio',
        'email',
        'password',
    ];

    /**
     * The `hidden` property specifies which attributes should be hidden when the model is converted to an array or JSON.
     * This is crucial for security, as it prevents sensitive information from being exposed in API responses or logs.
     * The `password` and `remember_token` are always hidden by default to protect user data.
     * `remember_token` is used for "remember me" functionality.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The `casts` method defines how certain attributes should be converted to different data types when they are retrieved or set.
     * This method is a key feature of Laravel's Eloquent ORM, ensuring data integrity and consistency.
     * * - `'email_verified_at' => 'datetime'`: This line casts the `email_verified_at` database column to a Carbon object. 
     * Carbon is a powerful PHP library for handling dates and times. 
     * This makes it easy to manipulate and format the date in your code.
     * * - `'password' => 'hashed'`: This line automatically hashes the password before it is stored in the database. 
     * This means you don't have to manually hash the password yourself when creating or updating a user. 
     * Laravel handles this securely, using a strong, one-way hashing algorithm. 
     * This is a critical security measure to protect user passwords.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }



    public function following()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'user_id');
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'user_id', 'follower_id');
    }

    public function imageUrl()
    {
        if ($this->image) {
            return Storage::url($this->image);
        }
        return null;
    }

    public function isFollowedBy(User $user)
    {
        return $this->followers()->where('follower_id', $user->id)->exists();
    }

    public function hasClapped(Post $post)
    {
        return $post->claps()->where('user_id', $this->id)->exists();
    }
}