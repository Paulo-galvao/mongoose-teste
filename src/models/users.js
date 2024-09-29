import conn from "../db.js";

const Schema = conn.Schema;

const userSchema = new Schema({
    name: String,
    email: String
})

const User = conn.model("User", userSchema);

User.create({
    name: "Paulo",
    email: "paulogalvaoj21@gmail.com"
})

export default User;