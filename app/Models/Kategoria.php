<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategoria extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'nev',
        
    ];

    public function receptek(){
        return $this->hasMany(Recept::class, 'kat_id', 'id');
    }

    
}

