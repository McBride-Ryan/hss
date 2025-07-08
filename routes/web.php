<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController; // Import your new controller

Route::get('/', [HomeController::class, 'index']);
Route::get('/dashboard', [HomeController::class, 'dashboard']);
Route::get('/about', [HomeController::class, 'about']);
