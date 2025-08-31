<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `NewPasswordController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller;        // We import the base Controller class from which our class will inherit.
use App\Models\User;                        // We import the User model to work with user data.
use Illuminate\Auth\Events\PasswordReset;   // We import the event that is fired when a password is successfully reset.
use Illuminate\Http\RedirectResponse;       // This indicates that a function will redirect the user to a new URL.
use Illuminate\Http\Request;                // This is the core class for handling incoming HTTP requests.
use Illuminate\Support\Facades\Hash;        // The facade for hashing passwords securely.
use Illuminate\Support\Facades\Password;    // The facade for the built-in password reset service.
use Illuminate\Support\Str;                 // The facade for string manipulation.
use Illuminate\Validation\Rules;            // We import the class that provides built-in validation rules.
use Illuminate\View\View;                   // This indicates that a function will return a server-rendered view.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class NewPasswordController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to display the password reset form.
     */
    // The `create` method handles the GET request from the password reset email link.
    // It takes a `Request` object and is type-hinted to return a `View`.
    public function create(Request $request): View
    {
        // The `view()` helper function loads a Blade template file.
        // It's looking for the file at 'resources/views/auth/reset-password.blade.php'.
        // We pass the request object to the view, which contains the 'token'
        // and 'email' parameters from the URL, so they can be pre-filled in the form.
        return view('auth.reset-password', ['request' => $request]);
    }

    /**
     * This method is responsible for processing the user's new password request.
     * It's called when the user submits the password reset form.
     *
     * The `@throws` tag in the docblock indicates that this method can throw an
     * `Illuminate\Validation\ValidationException` if the input is not valid.
     */
    // The `store` method handles the POST request from the form.
    // It takes a `Request` object and is type-hinted to return a `RedirectResponse`.
    public function store(Request $request): RedirectResponse
    {
        // This is the first step: validating the incoming data.
        // The `validate()` method ensures all required fields are present and correctly formatted.
        $request->validate([
            'token' => ['required'], // The token from the URL must be present.
            'email' => ['required', 'email'], // The email must be present and a valid email format.
            // The password must be present, must be confirmed (match the password_confirmation field),
            // and must meet the default security rules (e.g., minimum length).
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // This comment explains what the next block of code is about to do.
        // It's a good practice for complex logic.
        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.

        // This is the most important part of the method. We use the `Password` facade's
        // `reset()` method to handle the entire password reset workflow.
        // This method automatically checks the token's validity, finds the user by email,
        // and handles any errors (e.g., expired token, invalid email).
        $status = Password::reset(
            // We pass the required information from the form to the service.
            $request->only('email', 'password', 'password_confirmation', 'token'),
            // This is an anonymous function (or "closure") that is executed ONLY if
            // the `Password::reset()` method determines the token is valid and the
            // user exists. It receives the `User` model as an argument. The `use ($request)`
            // part makes the `$request` variable from the outer scope available inside this function.
            function (User $user) use ($request) {
                // `forceFill()` fills the model's attributes. We set the new password.
                $user->forceFill([
                    'password' => Hash::make($request->password), // We hash the password for security.
                    'remember_token' => Str::random(60), // We also reset the 'remember me' token for security.
                ])->save(); // The `save()` method persists the changes to the database.

                // This line fires a `PasswordReset` event. Other parts of the application
                // (e.g., listeners) can react to this event, for example, to send a
                // notification email to the user.
                event(new PasswordReset($user));
            }
        );

        // This comment explains the final return statement.
        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.

        // This is a "ternary operator" that checks the `$status` returned by `Password::reset()`.
        // The `Password::PASSWORD_RESET` constant is a predefined success message from Laravel.
        return $status == Password::PASSWORD_RESET
                    ? redirect()->route('login')->with('status', __($status))
                    // If the status is success, we redirect to the login page and
                    // pass a session status message that can be displayed to the user.
                    : back()->withInput($request->only('email'))
                        ->withErrors(['email' => __($status)]);
                    // If the status is an error, we redirect the user back to the
                    // previous page. `withInput()` pre-fills the email field,
                    // and `withErrors()` passes the validation error message.
    }
}