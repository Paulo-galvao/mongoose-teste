import conn from "../db.js";

const Schema = conn.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true,
        enum: ["vira-lata", "caramelo", "raca-definida"]
    }
})

const Animal = conn.model("Animal", animalSchema);

export default Animal;