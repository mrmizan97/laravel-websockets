<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class ChatsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return 'ok';
    }
    public function fetchMessage()
    {
        return Message::with('user')->get();
    }
    public function sendMessage(Request $request)
    {
        auth()->user()->messages()->create([
          'message'=>$request->title
      ]);
        return [
          'status'=>'success'
      ];
    }
}
