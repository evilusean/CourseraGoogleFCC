<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// It tells PHP that this `ProfileController` class lives in the `App\Http\Controllers` directory.
namespace App\Http\Controllers;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Requests\ProfileUpdateRequest; // This is a special class for handling form validation.
use Illuminate\Http\RedirectResponse; // A type hint indicating a function will redirect the user.
use Illuminate\Http\Request; // The core class for handling incoming HTTP requests.
use Illuminate\Support\Facades\Auth; // Provides methods for logging users in and out.
use Illuminate\Support\Facades\Redirect; // A facade for redirecting the user to a new URL.
use Illuminate\View\View; // A type hint indicating a function will return a server-rendered view.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, which gives it access to useful built-in features.
class ProfileController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to display the user's profile editing form.
     */
    // The `edit` method accepts a `Request` object and is type-hinted to return a `View` object.
    public function edit(Request $request): View
    {
        // The `view()` helper function loads a Blade template file. In this case,
        // it's looking for the file at 'resources/views/profile/edit.blade.php'.
        return view('profile.edit', [
            // This is how we pass data from the controller to the view.
            // We're creating an array with a key 'user' and its value is the
            // currently authenticated user, which we get from `$request->user()`.
            // The view can then access this data using the variable `$user`.
            'user' => $request->user(),
        ]);
    }

    /**
     * This method's purpose is to update the user's profile information.
     */
    // The `update` method is type-hinted with a special `ProfileUpdateRequest` class.
    // This is a "Form Request" class that handles all the validation rules before the
    // method is even called, ensuring the data is clean and valid.
    // It is type-hinted to return a `RedirectResponse`.
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        // This is a powerful Eloquent ORM method. It fills the user model with
        // the validated data from the request. The `validated()` method on the
        // form request automatically returns only the validated fields.
        $request->user()->fill($request->validated());

        // We check if the 'email' field has been changed. The `isDirty()` method
        // on the user model checks if a specific attribute has been modified since it
        // was last saved.
        if ($request->user()->isDirty('email')) {
            // If the email has been changed, we set the `email_verified_at` column to null.
            // This is a security measure that forces the user to re-verify their new email address.
            $request->user()->email_verified_at = null;
        }

        // This line saves the changes to the user model to the database.
        $request->user()->save();

        // This returns a redirect response. We are redirecting to the route named 'profile.edit'
        // and adding a session-based status message. The `.with('status', 'profile-updated')`
        // part makes the `status` variable available in the next request's session, which
        // can be used to display a success message to the user.
        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    /**
     * This method is responsible for deleting the user's account.
     */
    // The `destroy` method takes a `Request` and returns a `RedirectResponse`.
    public function destroy(Request $request): RedirectResponse
    {
        // We use `validateWithBag()` to validate a specific set of inputs for this
        // action. The 'userDeletion' is a unique name for a validation error bag,
        // which helps keep these errors separate from other form errors on the page.
        // We require the user to enter their current password to confirm their identity.
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'], // The `current_password` rule checks the input against the user's actual password.
        ]);

        // We get the currently authenticated user.
        $user = $request->user();

        // We log the user out of their session. This is an important step before deleting the account.
        Auth::logout();

        // This line deletes the user from the database.
        $user->delete();

        // These two lines manage the session. We invalidate the session to clear all
        // of its data and then regenerate the session token to prevent a session fixation attack.
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Finally, we redirect the user to the home page ('/').
        return Redirect::to('/');
    }
}