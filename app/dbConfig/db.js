import mongoose from "mongoose";

export async function connect(){

    try{
        mongoose.connect(process.env.MONGO_URL);

        mongoose.connection.on("CONNECTED", () => {
            console.log("CONNECTED TO DATABASE")
        })

    } catch (error) {
        console.log("FAILED TO CONNECT DATABASE.", error);
    }
}