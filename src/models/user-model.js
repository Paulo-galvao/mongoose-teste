import conn from "../db.js";

const Schema = conn.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
              return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
        }
    },
    senha: {
        type: String,
        required: true
    },
    permissao: {
        type: String,
        required: true,
        enum: ["ADM", "REC", "TOSA"],
        default: "TOSA"
    }
})

const User = conn.model("User", userSchema);

export default User;