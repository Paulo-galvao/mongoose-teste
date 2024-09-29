import mongoose from "mongoose";
const mongoDb = "mongodb://localhost:27017/pet-shop";

async function main() {
    try {
        await mongoose.connect(mongoDb);
    } catch (error) {
        console.log(error.message);
    }
}

main();

export default mongoose;