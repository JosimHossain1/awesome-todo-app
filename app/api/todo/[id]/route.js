import db_connector from "@/libs/mongodb";
import todoModel from "@/models/todoModel";
import { NextResponse } from "next/server";


export async function PUT(request, {params}){
   await db_connector()
   const  {id} = params
   const {newTitle: title, newDescription: description } = await request.json();

   await todoModel.findByIdAndUpdate(id, {title, description})
   return NextResponse.json({message: "Todo is Updated"}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params
    await db_connector()
   const todo =  await todoModel.findOne({_id: id})
    return NextResponse.json({todo}, {status: 200})
}