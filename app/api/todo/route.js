import db_connector from "@/libs/mongodb";
import todoModel from "@/models/todoModel";
import { NextResponse } from "next/server";

export async function POST(request){
    await db_connector()
   const {title, description} =  await request.json()
   await todoModel.create({title, description});
   return NextResponse.json({message: "Todo Created"}, {status: 201})
}

export async function GET(){
    await db_connector()
    return NextResponse.json(await todoModel.find())
}

export async function DELETE(request){
    await db_connector()
    const id = request.nextUrl.searchParams.get("id")
    await todoModel.findByIdAndDelete(id)
    return NextResponse.json({message: "Todo Deleted"}, {status: 200})

}