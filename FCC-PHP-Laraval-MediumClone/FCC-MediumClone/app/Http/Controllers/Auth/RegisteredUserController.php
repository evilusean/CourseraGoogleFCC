<?php

// The 'namespace' keyword is like a folder for your classes. It helps organize your
// code and prevents naming conflicts. This tells PHP that the 'RegisteredUserController'
// class lives within the 'App\Http\Controllers\Auth' namespace.
namespace App\Http\Controllers\Auth;

// The 'use' statements are like import statements in other languages. They tell this file
// where to find other classes so you can refer to them by their short name
// instead of their full namespace path.
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View; // This is the key difference from the last file!
// The 'View' class is used to return a server-side rendered HTML file.

// This line declares the class. 'extends Controller' means that 'RegisteredUserController'
// inherits all the methods and properties from Laravel's base 'Controller' class,
// giving it built-in functionality without having to write it from scratch.
class RegisteredUserController extends Controller
{
    /**
     * This is a "docblock" comment. It's a best practice to document what a method does.
     * It explains that this method's purpose is to "Display the registration view."
     */
    public function create(): View // The ': View' type hint indicates that this function will return a View object.
    {
        // This is the core difference. The 'view()' helper function is used to load and render a
        // Blade template file. It tells Laravel to look for the file located at
        // 'resources/views/auth/register.blade.php'.
        return view('auth.register');
    }

    /**
     * This docblock explains that this method handles the form submission
     * for a new user registration request.
     * The '@throws' line documents that this function might throw a 'ValidationException'
     * if the form data is invalid, which is handled automatically by Laravel.
     */
    public function store(Request $request): RedirectResponse
    {
        // The `$request->validate()` method is a critical step for security and data integrity.
        // It checks the incoming form data against a set of rules. If any rule fails,
        // Laravel automatically redirects the user back to the form with the validation errors.
        // The array syntax here is another way to list validation rules, which is often preferred
        // for readability when you have multiple rules.
        $request->validate([
            // This rule ensures the 'name' field is required, is a string, and has a maximum length.
            'name' => ['required', 'string', 'max:255'],

            // This rule ensures the 'email' is required, a string, converted to lowercase,
            // is a valid email format, has a max length, and is unique in the 'users' table.
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],

            // This rule for 'password' is an array of rules.
            // - 'required': must be present.
            // - 'confirmed': automatically checks for a matching 'password_confirmation' field.
            // - 'Rules\Password::defaults()': loads a set of default security rules, like minimum length.
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // After validation passes, this line creates a new 'User' model instance
        // and saves it to the database in one step.
        // 'User::create()' is a powerful Eloquent ORM method.
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            // The password MUST be hashed before storing it for security.
            // 'Hash::make()' uses a secure, one-way algorithm to encrypt the password.
            'password' => Hash::make($request->password),
        ]);

        // This line triggers a built-in Laravel 'Registered' event.
        // This allows other parts of the application to react to a new user registration.
        // A common use is to automatically send a 'Verify Email Address' notification to the user.
        event(new Registered($user));

        // The 'Auth' facade provides methods for handling user sessions.
        // 'Auth::login($user)' immediately logs the newly created user into the application.
        Auth::login($user);

        // This line returns a redirect response. The browser is instructed to go to a new URL.
        // 'route('dashboard', absolute: false)' is the best way to generate the URL. It
        // looks up the URL for the route named 'dashboard' instead of hardcoding a URL string.
        return redirect(route('dashboard', absolute: false));
    }
}
