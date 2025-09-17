<?php

// This line imports the `ProfileController` class from its namespace.
// The `use` statement makes the class available to this file, so we can refer to it directly as `ProfileController`
// instead of its full namespace `App\Http\Controllers\ProfileController`.
use App\Http\Controllers\ClapController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;

// This line imports the `Route` facade. The `Route` facade is the primary way to
// register new routes in a Laravel application. It provides static methods like `get()`, `post()`, etc.,
// to define how incoming HTTP requests are handled.
use App\Http\Controllers\PublicProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// This route handles GET requests to the root URL (`/`).
// When a user visits the homepage, this closure (anonymous function) is executed.
// `return view('welcome')` loads and returns the `resources/views/welcome.blade.php` file,
// rendering it as the homepage.
Route::get('/', function () {
    return view('welcome');
});

Route::get('/@{user:username}', [PublicProfileController::class, 'show'])
    ->name('profile.show');

Route::get('/', [PostController::class, 'index'])
->name('dashboard');

Route::get('/@{username}/{post:slug}', [PostController::class, 'show'])
        ->name('post.show');


// This route handles GET requests to the `/dashboard` URL.
// The `middleware()` method specifies which middleware must be run before the request is handled.
// - `'auth'`: Ensures that only authenticated (logged-in) users can access this route.
// - `'verified'`: Checks if the authenticated user's email has been verified.
// The `name()` method assigns a unique name to the route (`dashboard`). This allows you to
// generate URLs to this route using its name (e.g., `route('dashboard')`) which makes your code more flexible.


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [PostController::class, 'index'])
        ->name('dashboard');

    Route::get('/category/{category}', [PostController::class, 'category'])
        ->name('post.byCategory');

    Route::get('/post/create', [PostController::class, 'create'])
        ->name('post.create');

    Route::post('/post/create', [PostController::class,'store'])->name('post.store');

    Route::delete('/post/{post}', [PostController::class,'destroy'])->name('post.destroy');

    Route::get('/my-posts', [PostController::class,'myPosts'])->name('myPosts');

    
    Route::post('/follow/{user}', [FollowerController::class, 'followUnfollow'])
        ->name('follow');

    Route::post('/clap/{post}', [ClapController::class, 'clap'])
        ->name('clap');
});

// This is a route group. The `Route::middleware('auth')` call applies the `auth` middleware
// to all routes defined within the closure. This is an efficient way to protect multiple
// routes with the same middleware without repeating the middleware call for each route.
// The routes inside this group can only be accessed by authenticated users.
Route::middleware('auth')->group(function () {
    // This route handles GET requests to `/profile`. It is a named route (`profile.edit`)
    // that directs the request to the `edit` method of the `ProfileController`.
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    // This route handles PATCH requests to `/profile`. PATCH requests are typically used
    // for updating a resource. It is named `profile.update` and maps to the `update` method.
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // This route handles DELETE requests to `/profile`. DELETE requests are used to
    // remove a resource. It is named `profile.destroy` and maps to the `destroy` method.
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// This line includes another routes file. Laravel's routing system allows you to
// break up your routes into separate files for better organization.
// The `auth.php` file typically contains all the routes related to authentication,
// such as login, logout, registration, and password reset routes.
require __DIR__ . '/auth.php';