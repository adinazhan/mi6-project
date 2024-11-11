<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;


use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $all_people = Person::all()->with('aliases', 'images', 'statuses');
        return $all_people;
    }
}
