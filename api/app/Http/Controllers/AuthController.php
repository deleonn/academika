<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class AuthController extends Controller
{
    public function login(Request $request){
      $isAuth = Auth::attempt(['username'=>$request->username,'password'=>$request->password]);
      if ($isAuth) {
        $user = User::where('username', $request->username)
                    ->with('role')
                    ->first();

        return response()->json([
          'data' => $user,
          'status' => true
        ]);
      }else{
        return response()->json([
          'status' => false
        ]);
      }
    }
}
