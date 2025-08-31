<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `ConfirmablePasswordController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller; // We are importing the base Controller class from which our class will inherit.
use Illuminate\Http\RedirectResponse; // This indicates that a function will redirect the user to a new URL.
use Illuminate\Http\Request; // This is the core class for handling incoming HTTP requests.
use Illuminate\Support\Facades\Auth; // The facade for managing user authentication.
use Illuminate\Validation\ValidationException; // This is a special class for throwing validation errors.
use Illuminate\View\View; // This indicates that a function will return a server-rendered view.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class ConfirmablePasswordController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to show the form where the user can confirm their password.
     */
    // The `show` method handles the GET request to display the password confirmation page.
    // It is type-hinted to return a `View` object.
    public function show(): View
    {
        // The `view()` helper function loads a Blade template file. It's looking for the
        // file at 'resources/views/auth/confirm-password.blade.php' and returns its rendered HTML.
        return view('auth.confirm-password');
    }

    /**
     * This method is responsible for confirming the user's password.
     * It's called when the user submits the password confirmation form.
     */
    // The `store` method handles the POST request from the form.
    // It takes a `Request` object and is type-hinted to return a `RedirectResponse`.
    public function store(Request $request): RedirectResponse
    {
        // This is a crucial security check. `Auth::guard('web')->validate()` attempts
        // to authenticate the user using the email of the currently logged-in user
        // and the password provided in the form. It returns `true` if the password is correct
        // and `false` otherwise, without actually logging the user out and back in.
        if (! Auth::guard('web')->validate([
            'email' => $request->user()->email, // We use the email of the currently authenticated user.
            'password' => $request->password, // We use the password from the form input.
        ])) {
            // If the password is not correct, we throw a `ValidationException`.
            // This displays a validation error message to the user, typically on the password field.
            throw ValidationException::withMessages([
                'password' => __('auth.password'),
            ]);
        }

        // If the password is correct, we store a timestamp in the user's session.
        // The key 'auth.password_confirmed_at' is used by Laravel's middleware
        // to know that the password has been recently confirmed. This allows the user
        // to access sensitive areas of the application for a period of time without
        // being asked for their password again.
        $request->session()->put('auth.password_confirmed_at', time());

        // We redirect the user to their intended destination. The `intended()` method
        // is smart and will send the user back to the page they were trying to access
        // before they were intercepted by the password confirmation screen.
        return redirect()->intended(route('dashboard', absolute: false));
    }
}