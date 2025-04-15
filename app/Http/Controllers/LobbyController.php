<?php

namespace App\Http\Controllers;

use App\Models\Lobby;
use Illuminate\Http\Request;

class LobbyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $lobby = Lobby::create(['player_one_id' => $request->user()->id]);

        return to_route('lobbies.show', $lobby);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lobby $lobby)
    {
        return inertia('lobbies/show', ['lobby' => $lobby]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lobby $lobby)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lobby $lobby)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lobby $lobby)
    {
        //
    }
}
