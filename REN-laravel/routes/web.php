<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Clowker;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/read', function () {
//     return view('welcome');
// });

Route::get('/createlowker', [Clowker::class, 'buat']);
Route::get('/readlowker', [Clowker::class, 'baca']);
Route::get('/updatelowker', [Clowker::class, 'ubah']);
Route::get('/deletelowker', [Clowker::class, 'hapus']);