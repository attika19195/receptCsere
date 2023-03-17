<?php

namespace App\Http\Controllers;

use App\Models\Kategoria;
use App\Models\Recept;
use Illuminate\Http\Request;

class ReceptController extends Controller
{

    
    public function receptek()
    {
        return Recept::with(['kategoria'])->get();
    }

    public function recept_mutat($id)
    {
        $recept = Recept::find($id)->load('kategoria');
        
        return $recept;
    }

    public function uj_recept(Request $request){
        $recepts  = new Recept();
        $recepts ->nev = $request->nev;
        $recepts ->kat_id = $request->kat_id;
        $recepts ->kep_eleresi_ut = $request->kep_eleresi_ut;
        $recepts ->leiras = $request->leiras;
        $recepts ->save();
    }

    public function recept_torles($id)
    {
        Recept::find($id)->delete();
    }

   
}
