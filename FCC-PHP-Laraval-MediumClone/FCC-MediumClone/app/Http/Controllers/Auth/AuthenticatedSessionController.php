<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `AuthenticatedSessionController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest; // A special class for handling login form validation and authentication.
use Illuminate\Http\RedirectResponse; // A type hint indicating a function will redirect the user.
use Illuminate\Http\Request; // The core class for handling incoming HTTP requests.
use Illuminate\Support\Facades\Auth; // The facade for managing user authentication and sessions.
use Illuminate\View\View; // A type hint indicating a function will return a server-rendered view.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class AuthenticatedSessionController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to display the login form.
     */
    // The `create` method handles the GET request to display the login page.
    // It is type-hinted to return a `View` object.
    public function create(): View
    {
        // The `view()` helper function loads a Blade template file. It's looking for the
        // file at 'resources/views/auth/login.blade.php' and returns its rendered HTML.
        return view('auth.login');
    }

    /**
     * This method is responsible for handling the incoming authentication request.
     * It's called when the user submits the login form.
     */
    // The `store` method is type-hinted with a special `LoginRequest` class.
    // This is a "Form Request" that automatically handles all validation
    // (e.g., checking if the email and password fields are present) and even the
    // authentication logic itself.
    // It is type-hinted to return a `RedirectResponse`.
    public function store(LoginRequest $request): RedirectResponse
    {
        // This is the key part of the login process. The `authenticate()` method
        // is called on the `LoginRequest` object. It attempts to log the user in
        // using the credentials from the request. If the credentials are invalid,
        // it automatically throws a validation exception and redirects the user
        // back to the form with an error message.
        $request->authenticate();

        // If authentication succeeds, this line regenerates the user's session ID.
        // This is a crucial security measure to prevent a "session fixation" attack.
        $request->session()->regenerate();

        // This returns a redirect response. The `intended()` method is very smart—it
        // redirects the user to the page they were originally trying to access before
        // they were intercepted by the login page. If there's no intended destination,
        // it redirects to the `dashboard` route by default.
        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * This method handles logging out the user by destroying their authenticated session.
     */
    // The `destroy` method handles the POST request for logging out.
    // It takes a `Request` object and returns a `RedirectResponse`.
    public function destroy(Request $request): RedirectResponse
    {
        // The `Auth::guard('web')` specifies that we are logging out of the
        // standard web guard. The `logout()` method invalidates the session and
        // clears the authentication state.
        Auth::guard('web')->logout();

        // This line explicitly invalidates the session, deleting all session data.
        $request->session()->invalidate();

        // This line regenerates the session token, another important security step
        // to prevent session-related attacks.
        $request->session()->regenerateToken();

        // Finally, we redirect the user to the home page ('/').
        return redirect('/');
    }
}