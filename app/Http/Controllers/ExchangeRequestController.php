<?php

namespace App\Http\Controllers;

use App\Models\ExchangeRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ExchangeRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exchangeRequests = ExchangeRequest::where('request_status','!=','approved')->paginate(10);
        return  Inertia::render('ExchangeRequests/Index', ['exchangeRequests' => $exchangeRequests]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('ExchangeRequests/Create');
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
    public function show(ExchangeRequest $exchangeRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ExchangeRequest $exchangeRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ExchangeRequest $exchangeRequest)
    {
        //
    }

    public function apiIndex()  
    {
        $exchangeRequests = ExchangeRequest::with('sender', 'receiver','book')->paginate(5);
        // $exchangeRequests = ExchangeRequest::with('sender', 'receiver','book')->where('request_status','!=','approved')->paginate(10);
        return response()->json($exchangeRequests, 200);    
    }
    public function apiShow($id)
    {
        $exchangeRequest = ExchangeRequest::findOrFail($id);
        return response()->json($exchangeRequest);
    }

    public function apiStore(Request $request)
    {
        // $validatedData = $request->validate([
        //     'title' => 'required|string|max:255',
        //     'author' => 'required|string|max:255',
        //     'genre' => 'required|string|max:255',
        //     'book_condition' => 'required|string|max:255',
        //     'availability_status' => 'required|boolean',
        // ]);
        $exchangeRequest = ExchangeRequest::create($request->all());

        return response()->json($exchangeRequest, 201);
    }

    public function apiUpdate(Request $request, $id)
    {
        $exchangeRequest = ExchangeRequest::findOrFail($id);

        // $validatedData = $request->validate([
        //     'title' => 'required|string|max:255',
        //     'author' => 'required|string|max:255',
        //     'genre' => 'required|string|max:255',
        //     'book_condition' => 'required|string|max:255',
        //     'availability_status' => 'required|boolean',
        // ]);

        $exchangeRequest->update($validatedData);

        return response()->json($exchangeRequest, 200);
    }

    public function destroy($id)
    {
        // Find the exchange request by ID
        $exchangeRequest = ExchangeRequest::findOrFail($id);

        // Delete the exchange request
        $exchangeRequest->delete();

        return response()->json(['message' => 'Exchange request deleted successfully']);
    }

    public function approve($id)
    {
        // Find the exchange request by ID
        $exchangeRequest = ExchangeRequest::findOrFail($id);

        // Update the exchange request status to 'approved'
        $exchangeRequest->update(['request_status' => 'approved']);

        return response()->json(['message' => 'Exchange request approved successfully']);
    }
}
