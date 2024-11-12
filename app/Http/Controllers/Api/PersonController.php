<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $all_people = Person::with(['aliases', 'images', 'statuses'])->get();
        return $all_people;
    }
}
