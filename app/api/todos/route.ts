import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbConfig/db";
import ToDo from "../../dbConfig/model"

import { v4 } from "uuid";
import axios from "axios";

export async function GET(request: NextRequest) {
    try{

    } catch (error) {
        return NextResponse.json({msg: "ERROR"})
    }
}