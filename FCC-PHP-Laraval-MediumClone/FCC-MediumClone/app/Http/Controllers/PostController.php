<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::get(); // will get all categories from the database (created by DatabaseSeeder.php)
        //dump($categories); //dump will print all categories to the console
        //dd($categories); // dump and die, as soon as it prints the categories, the script stops here, it stops the execution
        
        // `Post::`: This is a static call to the `Post` Eloquent model. In Laravel, an Eloquent model
        // corresponds to a database table, so `Post` represents the `posts` table.
        //$posts = Post::orderBy('created_at', 'DESC')->get(); // will 'get' ALL posts, use paginate below for fewer
        $posts = Post::orderBy('created_at', 'DESC')->paginate(10);
          // `->paginate(10)`: This is the method that executes the query and handles pagination.
        // - `(10)`: This argument specifies that only 10 posts should be returned per page.
        // Instead of fetching all posts at once, Laravel only retrieves a limited number
        // for the current page, which is crucial for performance with large datasets.
        // This method returns a `LengthAwarePaginator` object that contains the results
        // along with all the necessary information for building pagination links (e.g., total items, current page, etc.).

        // `orderBy('created_at', 'DESC')`: This is the method that orders the query results.
        // - The first argument, `'created_at'`, specifies the column to sort by. Laravel automatically
        //   creates and manages this timestamp column, which tracks when each post was created.
        // - The second argument, `'DESC'`, specifies the sorting direction as "descending".
        //   This means the posts will be returned with the most recently created one appearing first.
        //   To get the posts from oldest to newest, you would use 'ASC' for ascending order.

        // `get()`: This method executes the query and retrieves all the results. It returns the
        // matched records as an Eloquent Collection, which is a powerful, array-like object
        // in Laravel that provides many convenient methods for working with the results.
        // The final result, `$posts`, will be a collection of `Post` model objects.
        
        return view('dashboard', 
        ['categories'=> $categories,
            'posts' => $posts,
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
