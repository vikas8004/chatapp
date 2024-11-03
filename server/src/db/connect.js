import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        const conn = await mongoose.connect(process.env.URI);
        console.log(`Connected to MongoDB: ${conn.connections[0].name}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw new Error("Connection to database failed.");
    }
}
