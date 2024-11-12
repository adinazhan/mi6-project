<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Mission;

class MissionController extends Controller
{
    public function index()
    {
        $all_missions = Mission::all();
        return $all_missions;
    }
    public function show($mission_id)
    {
        $mission = Mission::with('people')->where('id', $mission_id)->get();
        return $mission;
    }
}
