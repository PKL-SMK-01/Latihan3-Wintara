<?php

namespace App\Http\Controllers;

use App\Models\Enployees;
use Illuminate\Http\Request;

class EnpleyeeController extends Controller
{
    public function getEnployees(){
        return response()->json(Enployees::all(), 200);
    }

    public function getEnployeesId($id){
        $enployees = Enployees::find($id);
        if(is_null($enployees)){
            return response()->json(['message' => 'Id Not Found'], 404);
        }
        return response()->json($enployees, 200);
    }

    public function addEnployees(Request $request){
        $enployees = Enployees::create($request->all());
        return response($enployees, 201);
    }

    public function updateEnployees(Request $request, $id){
        $enployees = Enployees::find($id);
        if(is_null($enployees)){
            return response()->json(['massage' => 'Update Not Found'], 404);
        }
        $enployees->update($request->all());
        return response($enployees, 200);
    }
    
    public function deleteEnployees(Request $request, $id){
        $enployees = Enployees::find($id);
        if(is_null($enployees)){
            return response()->json(['massage' => 'Delete Not Found'], 404);
        }
        $enployees->delete();
        return response()->json(null, 204);
    }
}
