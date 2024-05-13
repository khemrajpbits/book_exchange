<?php

use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Message;
use App\Models\ExchangeRequest;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BookController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ExchangeRequestController;

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    $users = User::count();
    $data = [
        'users' => User::count(),
        'books' => Book::count(),
        'exchange_request' => ExchangeRequest::count(),
        'exchange_request_approved' => ExchangeRequest::where('request_status' ,'=','approved')->count(),
        'exchange_request_rejected' => ExchangeRequest::where('request_status' ,'=','rejected')->count(),
        'exchange_request_pending' => ExchangeRequest::where('request_status' ,'=','pending')->count(),
    ];

    return Inertia::render('Dashboard', ['data'=>$data]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile-list', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/books', BookController::class);
    Route::resource('/exchange_requests', ExchangeRequestController::class);
    Route::resource('/messages', MessageController::class);
});

require __DIR__.'/auth.php';
