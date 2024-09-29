import conn from "../db.js";
import bcrypt from "bcrypt";

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
    },
    endereco: {
        type: Object,
        required: true
    }
})

userSchema.pre("save", async function () {    
    this.senha = await bcrypt.hash(this.senha, 10); // Monta o hash criptografado
});

userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.senha);
};

const User = conn.model("User", userSchema);

export default User;