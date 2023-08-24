import mongoose, { Schema, model } from "mongoose";

const movieSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    rating: Number,
    producers: [String],
});


const Movie = model('Movie', movieSchema);

export default Movie;