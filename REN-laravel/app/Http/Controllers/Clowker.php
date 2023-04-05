<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lowker;

class Clowker extends Controller
{
    //
    
    public function buat() {
        $lowker = new Lowker; 
        $all_lowker =  $lowker->dataLowker(); 
        echo var_dump(json_encode($all_lowker));
    }
    
    public function baca() {
        $lowker = new Lowker; 
        $all_lowker =  $lowker->dataLowker(); 
        echo json_encode($all_lowker);
    }
    
    public function ubah() {
        $lowker = new Lowker; 
        $all_lowker =  $lowker->dataLowker(); 
        echo var_dump(json_encode($all_lowker));
    }

    public function hapus() {
        $lowker = new Lowker; 
        $all_lowker =  $lowker->dataLowker(); 
        echo var_dump(json_encode($all_lowker));
    }
}
