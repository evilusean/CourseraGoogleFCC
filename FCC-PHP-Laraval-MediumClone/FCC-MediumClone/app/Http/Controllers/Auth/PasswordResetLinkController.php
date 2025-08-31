<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `PasswordResetLinkController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller;        // We import the base Controller class from which our class will inherit.
use Illuminate\Http\RedirectResponse;       // This indicates that a function will redirect the user to a new URL.
use Illuminate\Http\Request;                // This is the core class for handling incoming HTTP requests.
use Illuminate\Support\Facades\Password;    // This is the facade for the built-in password reset service.
use Illuminate\View\View;                   // This indicates that a function will return a server-rendered view.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class PasswordResetLinkController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to display the 'forgot password' view.
     */
    // The `create` method handles the GET request to show the password reset form.
    // It's a simple method that is type-hinted to return a `View`.
    public function create(): View
    {
        // The `view()` helper function loads a Blade template file.
        // It's looking for the file at 'resources/views/auth/forgot-password.blade.php'.
        return view('auth.forgot-password');
    }

    /**
     * This method is responsible for processing the user's request to send a
     * password reset link. It's called when the user submits the form.
     *
     * The `@throws` tag in the docblock indicates that this method can throw an
     * `Illuminate\Validation\ValidationException` if the input is not valid.
     */
    // The `store` method handles the POST request from the form.
    // It takes a `Request` object and is type-hinted to return a `RedirectResponse`.
    public function store(Request $request): RedirectResponse
    {
        // The first step is to validate the user's input. We ensure the email
        // field is present and is in a valid email format.
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        // This comment explains what the next block of code is about to do.
        // It's a good practice for complex logic.
        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.

        // This is the most important part. We use the `Password` facade's
        // `sendResetLink()` method to handle the entire complex process:
        // 1. Finding the user by email.
        // 2. Checking if the user exists.
        // 3. Generating a secure, unique password reset token.
        // 4. Saving the token to the database.
        // 5. Sending an email with the link containing the token to the user.
        // It returns a status string to indicate success or failure.
        $status = Password::sendResetLink(
            $request->only('email')
        );

        // This is a "ternary operator" that checks the `$status` returned by the
        // `Password::sendResetLink()` method.
        // The `Password::RESET_LINK_SENT` constant is a predefined success message from Laravel.
        return $status == Password::RESET_LINK_SENT
                    ? back()->with('status', __($status))
                    // If the status is success, we redirect the user back to the form
                    // and pass a session status message that can be displayed to the user
                    // (e.g., "We have emailed your password reset link!"). The `__($status)`
                    // function translates the status message.
                    : back()->withInput($request->only('email'))
                        ->withErrors(['email' => __($status)]);
                    // If the status is an error (e.g., the email doesn't exist), we
                    // redirect the user back to the previous page (`back()`). `withInput()`
                    // pre-fills the email field, and `withErrors()` passes the error
                    // message to be displayed.
    }
}
