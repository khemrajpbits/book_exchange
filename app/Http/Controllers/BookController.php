<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with('user')->paginate(8);
        return  Inertia::render('Books/Index', ['books' => $books]);
    }

   
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'author' => 'required',
            'genre' => 'required',
            'book_condition' => 'required',
            'availablity_status' => 'required',
        ]);

        Book::create($validatedData);
        // Session::flash('success', 'Book created successfully');
        return redirect()->route('books.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return inertia('Books/Show', ['book' => $book]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        $book = Book::with('user')->findOrFail($book->id);
        return inertia('Books/Edit', ['book' => $book]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'author' => 'required',
            'genre' => 'required',
            'book_condition' => 'required',
            'availablity_status' => 'required',
        ]);
        $book->update($validatedData);

        return redirect()->route('books.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('books.index');
    }


    public function apiIndex()  
    {
        $books = Book::with('user')->paginate(6);
        return response()->json($books, 200);    
    }
    public function apiShow($id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book);
    }

    public function apiStore(Request $request)
    {
        // $validatedData = $request->validate([
        //     'title' => 'required|string|max:255',
        //     'author' => 'required|string|max:255',
        //     'genre' => 'required|string|max:255',
        //     'book_condition' => 'required|string|max:255',
        //     'availablity_status' => 'required|boolean',
        // ]);
        $book = Book::create($request->all());

        return response()->json($book, 200);
    }

    public function apiUpdate(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'book_condition' => 'required|string|max:255',
            'availablity_status' => 'required|boolean',
        ]);

        $book->update($validatedData);

        return response()->json($book, 200);
    }
}
