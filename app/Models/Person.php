<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Alias;
use App\Models\Image;
use App\Models\Status;

class Person extends Model
{

    public function aliases()
    {
        return $this->hasMany(Alias::class);
    }
    public function images()
    {
        return $this->belongsTo(Image::class);
    }
    public function statuses()
    {
        return $this->belongsTo(Status::class);
    }
}
