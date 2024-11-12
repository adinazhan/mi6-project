<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input("status");

        $all_people_query = Person::with(['aliases', 'images', 'statuses'])->limit(20);

        if ($status) {
            $all_people_query->where("status_id", $status);
        }

        $all_people = $all_people_query->get();

        return $all_people;
    }

    public function show($person_id)
    {
        $person = Person::with(['aliases', 'images', 'statuses', 'missions'])->where('id', $person_id)->get();
        return $person;
    }
}
