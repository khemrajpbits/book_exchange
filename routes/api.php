<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::middleware('auth:sanctum')->group(function () {
});
Route::get('books', [BookController::class,'apiIndex']);
Route::get('/books/{id}', [BookController::class, 'apiShow']);
Route::post('books', [BookController::class, 'apiStore']);
Route::put('/books/{id}', [BookController::class, 'apiUpdate']);



Route::get('exchange_requests', [BookController::class,'apiIndex']);
Route::get('/exchange_requests/{id}', [BookController::class, 'apiShow']);
Route::post('exchange_requests', [BookController::class, 'apiStore']);
Route::put('/exchange_requests/{id}', [BookController::class, 'apiUpdate']);



