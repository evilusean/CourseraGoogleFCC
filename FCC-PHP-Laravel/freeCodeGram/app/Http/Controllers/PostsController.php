<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostsController extends Controller
{
    public function create()
    {
        return view('posts.create');
    }
    public function store()
    {
        // Validate the data
        $data = request()->validate([
            'title' => 'required',
            'image' => ['required', 'image'],
        ]);

        //supposed to get an authenticated user, go into their posts and create a new post from the User.php model
        auth()->user()->posts()->create($data);
        //supposed to create a post from the validated $data 
        \App\Models\Post::create($data);

        // Create a new post using the request data die and dump debugging
        dd(request()->all());
    }
}
