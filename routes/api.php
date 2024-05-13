<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ExchangeRequestController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::middleware('auth:sanctum')->group(function () {
});
Route::get('books', [BookController::class,'apiIndex']);
Route::get('/books/{id}', [BookController::class, 'apiShow']);
Route::post('books', [BookController::class, 'apiStore']);
Route::put('/books/{id}', [BookController::class, 'apiUpdate']);



Route::get('exchange_requests', [ExchangeRequestController::class,'apiIndex']);
Route::get('/exchange_requests/{id}', [ExchangeRequestController::class, 'apiShow']);
Route::post('exchange_requests', [ExchangeRequestController::class, 'apiStore']);
Route::put('/exchange_requests/{id}', [ExchangeRequestController::class, 'apiUpdate']);
Route::delete('/exchange_requests/delete/{id}', [ExchangeRequestController::class, 'destroy']);
Route::patch('/exchange_requests/approve/{id}', [ExchangeRequestController::class, 'approve']);


Route::get('/users', [ProfileController::class, 'messageUserList']);

Route::post('/messages/fetch', [MessageController::class, 'getMessage']);
Route::post('/messages/send', [MessageController::class, 'apiStore']);



