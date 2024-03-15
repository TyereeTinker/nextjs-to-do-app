import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },
    TITLE: {
        type: String,
        required: true,
    },
    DESCRIPT: {
        type: String,
        required: true,
    },
    STATUS: {
        type: Boolean,
        default: false
    }
})

const ToDo = mongoose.models.todos || mongoose.model("todos", TodoSchema)

export default ToDo;