<?php

use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\StatusController;
use Illuminate\Support\Facades\Route;


Route::get("/people", [PersonController::class, 'index']);
Route::get("/statuses", [StatusController::class, 'index']);
Route::get("/people/{person_id}", [PersonController::class, 'show']);
