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

Route::match(['get', 'post'],'/', function () {
    return view('welcome');
});

// Route::get('/read', function () {
//     return view('welcome');
// });

Route::match(['get', 'post'], '/api/readlowker', [Clowker::class, 'baca']);
Route::match(['get', 'post'], '/api/selectlowker/{json}', [Clowker::class, 'bacasatu']);

Route::match(['get', 'post'], '/api/updatelowker', [Clowker::class, 'ubah']);
Route::match(['get', 'post'], '/api/deletelowker', [Clowker::class, 'hapus']);

Route::match(['get', 'post'], '/api/inslowker', [Clowker::class, 'insertlowker']);
Route::match(['get', 'post'], '/api/ins/{json}', [Clowker::class, 'insertjson']);
Route::match(['get', 'post'], '/api/upd/{json}', [Clowker::class, 'updatejson']);
Route::match(['get', 'post'], '/api/del/{json}', [Clowker::class, 'deletejson']);