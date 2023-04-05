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

    public function insertlowker(Request $request){       
        $lowker = new Lowker;
        $lowker->nama = $request->input('nama');
        $lowker->deskripsi = $request->input('deskripsi');
        $lowker->tpm = $request->input('tpm');
        $lowker->open = $request->input('open');
        $lowker->close = $request->input('close');
        $lowker->kuota = $request->input('kuota');
        $lowker->save();
        return response()->json($lowker);
    }

    public function insertjson($json){
        $request = json_decode($json);

        $lowker = new Lowker;
        $lowker->nama = $request->nama;
        $lowker->deskripsi = $request->desk;
        $lowker->tpm = $request->tpm;
        $lowker->open = date_format(date_create($request->opn),"Y/m/d H:i:s");
        $lowker->close = date_format(date_create($request->cls),"Y/m/d H:i:s");
        $lowker->kuota = $request->qt;
        $lowker->save();
        return response()->json($lowker);
    }

    public function updatejson($json){
        $request = json_decode($json);

        $lowker = Lowker::find($request->id);
        $lowker->nama = $request->nama;
        $lowker->deskripsi = $request->deskripsi;
        $lowker->tpm = $request->tpm;
        $lowker->open = $request->open;
        $lowker->close = $request->close;
        $lowker->kuota = $request->kuota;
        $lowker->update();
        return response()->json($lowker);
    }

    public function deletejson($json){
        $request = json_decode($json);

        $lowker = Lowker::find($request->id);
        $lowker->delete();
        return response()->json($lowker);
    }

    public function cekjson(Request $request){
        // echo var_dump($request->input('dddd'));
        echo var_dump($request);
        // $request = json_decode($json);
    }
}
