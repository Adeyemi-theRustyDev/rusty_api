import  mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    author: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema);

export default Book;