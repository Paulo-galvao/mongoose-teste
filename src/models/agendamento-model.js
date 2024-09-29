import conn from '../db.js';

const Schema = conn.Schema;
const schedulingSchema = new Schema({
    date: {
        type: Schema.Types.Date,
        default: new Date().toISOString(),
        imutable: true,
        required: true,
    },
    time:{
        type: String,
        required: true
    },
    animal_id: {
        type: Schema.Types.ObjectId,
        ref: "Animal",
        required: true
    }
})

const Scheduling = conn.model("scheduling", schedulingSchema);

export default Scheduling;