import { dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/books.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // Server Listener
    app.listen(process.env.PORT, () => {
        console.log("Listening to requests on port", process.env.PORT);
    })
})
.catch((err) => console.log(err));

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use('/api/books', postRoutes);
// Routes
app.get('/', (req, res) => {
    const pathToImg = __dirname + '/public/banner.jpg';
    res.sendFile(pathToImg);
});



// app.get('/books', (req, res) => {

// })

// app.get('/books?title', (req, res) => {
//     const { title } = req.query
//     Book.findOne({ name: title })
//     .then((books) => res.json(books))
//     .catch(err => console.log(err));
//     // Book.
// })

// app.get('/books/create', (req, res) => {
//     const page = __dirname + '/views/index.html';
//     res.sendFile(page);
// })

// app.post('/books/create', (req, res) => {
//     const { name, author } = req.body;

//     const myBook = new Book({ name, author });
//     myBook.save()
//     .then(() => {
//         console.log("Book has been saved to the db");
//         res.status(200).json({ mmsg: "Book saved" });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(400).json({ err });
//     });
// })

// app.get('/books/bk_:id/', (req, res) => {
//     const { id } = req.params;
//     Book.findById(id)
//     .then((data) => {
//         res.status(200).json(data);
//     })
//     .catch(err => console.log(err));
//     // res.json({ id: req.params.id });
// })




