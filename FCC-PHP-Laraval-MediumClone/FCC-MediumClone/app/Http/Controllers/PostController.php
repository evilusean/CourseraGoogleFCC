<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostCreateRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$categories = Category::get(); // will get all categories from the database (created by DatabaseSeeder.php)
        //dump($categories); //dump will print all categories to the console
        //dd($categories); // dump and die, as soon as it prints the categories, the script stops here, it stops the execution

        // `Post::`: This is a static call to the `Post` Eloquent model. In Laravel, an Eloquent model
        // corresponds to a database table, so `Post` represents the `posts` table.
        //$posts = Post::orderBy('created_at', 'DESC')->get(); // will 'get' ALL posts, use paginate below for fewer

        //$posts = Post::orderBy('created_at', 'DESC')->paginate(5);
        // `->paginate(10)`: This is the method that executes the query and handles pagination.
        // - `(10)`: This argument specifies that only 10 posts should be returned per page.
        // Instead of fetching all posts at once, Laravel only retrieves a limited number
        // for the current page, which is crucial for performance with large datasets.
        // This method returns a `LengthAwarePaginator` object that contains the results
        // along with all the necessary information for building pagination links (e.g., total items, current page, etc.).

        $user = auth()->user();

        $query = Post::latest();
        if ($user) {
            $ids = $user->following()->pluck('users.id');
            $query->whereIn('user_id', $ids);
        }
        $posts = $query->simplePaginate(5);
        // `->simplePaginate(5)`: This is the method that executes the query and handles pagination.
        // - The argument `(5)` specifies that only 5 posts should be returned per page.
        // - Unlike the standard `paginate()` method, `simplePaginate()` is more efficient
        //   because it does not count the total number of items in the database. This makes it
        //   faster for very large datasets, as it avoids an extra, costly `COUNT(*)` query.
        // - The trade-off is that it only provides "Next" and "Previous" links in the view;
        //   it cannot display a full set of page numbers (e.g., 1, 2, 3...).
        // - This method returns an `Illuminate\Pagination\Paginator` object, which is then
        //   stored in the `$posts` variable. This object contains the posts for the current page
        //   and the necessary data to generate pagination links.

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

        return view(
            'post.index',
            [
                'posts' => $posts,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return view('post.create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostCreateRequest $request)
    {
        $data = $request->validated();
        // $image = $data['image'];
        // unset($data['image']);
        $data['user_id'] = auth()->id();
        $data['slug'] = Str::slug($data['title']);

        // $imagePath = $image->store('posts', 'public');
        // $data['image'] = $imagePath;

        

        $post = Post::create($data);

        $post->addMediaFromRequest('image')->toMediaCollection();

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $username, Post $post)
    {
        return view('post.show', [
            'post' => $post,
        ]);
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
    public function category(Category $category)
    {
        $posts = $category->posts()->latest()->simplePaginate(5);
        return view('post.index', [
            'posts' => $posts,
        ]);
    }
}
