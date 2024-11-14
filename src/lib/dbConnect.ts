import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async () => {
    const connectionState = mongoose.connection.readyState;

    if(connectionState===1){
        console.log("Already connected");
        return;
    }

    if(connectionState===2){
        console.log("connecting...");
        return;
    }

    try {
        const opts = {
            bufferCommands: true,
        };
        await mongoose.connect(MONGO_URI!, opts);
        console.log("db connected");
    } catch (error: any) {
        console.log("Error: ",error);
        throw new Error("Error: ",error)
    }
}

export default dbConnect;