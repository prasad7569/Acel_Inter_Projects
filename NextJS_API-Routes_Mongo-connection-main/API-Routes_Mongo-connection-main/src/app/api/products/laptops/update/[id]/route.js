import LaptopModel from "@/app/utils/models/Laptop";
import { NextResponse } from "next/server";


export async function GET(request, context){
    console.log("this is context", context)

    const id = context.params.id;

    const productRecord = await LaptopModel.findById(id)

    return NextResponse.json({productRecord})

}