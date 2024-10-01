import mongoose from "mongoose";
import "dotenv/config";
const mongoDb = process.env.MONGODB;

async function main() {
    try {
        await mongoose.connect(mongoDb);
        console.log("DB connected");
    } catch (error) {
        console.log(error.message);
    }
}

main();

export default mongoose;