<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function create()
    {
        return view('posts.create');
    }
    public function store()
    {
        // Create a new post using the request data)
        dd(request()->all());
        
        // Validate the data
        $this->validate(request(), [
            'title' => 'required',
            'body' => 'required'
        ]);
        // Create a new post using the request data
        auth()->user()->publish(
            new Post(request(['title', 'body']))
        );
        // Redirect to the home page
        return redirect('/');
    }
}
