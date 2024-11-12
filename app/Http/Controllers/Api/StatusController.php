<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Status;

class StatusController extends Controller
{
    public function index()
    {
        $all_statuses = Status::all();
        return $all_statuses;
    }
}
