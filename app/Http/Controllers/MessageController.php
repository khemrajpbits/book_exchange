<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = Message::with('user')->paginate(8);
        return  Inertia::render('Messages/Index', ['messages' => $messages]);
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
        $input = $request->all();
        $message = Message::create($input);

        return response()->json($message, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Message $message)
    {
      
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }

    public function getMessage(Request $request)
    {   
        // $messages = Message::where('user_id', $request->user_id)->paginate(10);
        $messages = Message::where('user_id', $request->user_id)->orWhere('sender_id', $request->user_id)->paginate(10);

        return response()->json($messages, 200);
    }

    public function apiStore(Request $request)  
    {
        $input = $request->all();
        $input['updated_at'] = now();
        $input['created_at'] = now();
        $message = Message::Create($input);
        return response()->json($message, 200);

    }

}
