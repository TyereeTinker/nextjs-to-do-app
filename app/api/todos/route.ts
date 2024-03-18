import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbConfig/db";
import ToDo from "../../dbConfig/model"

import { v4 } from "uuid";
import { NextURL } from "next/dist/server/web/next-url";

connect();

function getIDfromPathname(s: String){
    let parts = s.split("/");
    return parts[parts.length -1];
}

export async function GET(request: NextRequest) {
    try{
        const todos = await ToDo.find({})
        return NextResponse.json({msg: "FOUND", success: true, todos})

    } catch (error) {
        return NextResponse.json({msg: "ERROR"}, {status: 500} )
    }
}

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json();
        const { title, desc } = reqBody;

        console.log("Request body:", reqBody); // Debug logging

        if (!title || !desc) {
            return NextResponse.json({ msg: "Title and description are required." }, { status: 500 });
        }

        const savedTodo = await ToDo.create({
            ID: v4(),
            TITLE: title,
            DESCRIPT: desc,
        });

        return NextResponse.json({ msg: "ADDED", success: true})

    } catch (error) {
        return NextResponse.json({msg: "ERROR"}, {status: 500} )
        
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        // Check if the ID is valid
        if (!id) {
            return NextResponse.json({ msg: "Invalid ID", success: false }, { status: 400 });
        }

        // Find the todo item by ID and delete it
        const deletedItem = await ToDo.findByIdAndDelete(id);

        if (!deletedItem) {
            return NextResponse.json({ msg: "Todo item not found", success: false }, { status: 404 });
        }

        return NextResponse.json({ msg: "Todo item deleted", success: true });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ msg: "Internal server error", success: false }, { status: 500 });
    }
}