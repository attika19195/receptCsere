<?php

use App\Http\Controllers\KategoriaController;
use App\Http\Controllers\ReceptController;
use Illuminate\Support\Facades\Route;

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
    return view('index');
});

Route::get('/api/receptek', [ReceptController::class, 'receptek']);
Route::get('/api/recept/{id}', [ReceptController::class, 'recept_mutat']);
Route::get('/api/uj_recept/{id}', [ReceptController::class, 'uj_recept']);
Route::get('/api/recept_torles/{id}', [ReceptController::class, 'recept_torles']);


Route::get('/api/kategoriak', [KategoriaController::class, 'kategoriak']);
