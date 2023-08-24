import Book from "../models/book.js";


const getTitleQuery  = (req, res) => {
    const { title } = req.query
    Book.findOne({ name: title })
    .then((books) => res.json(books))
    .catch(err => console.log(err));

}

const createBook = (req, res) => {
    const page =  '/home/yemi/Projects/rusty-api/views/index.html';
    res.sendFile(page);
}

const createBookPost = (req, res) => {
    const { name, author } = req.body;

    const myBook = new Book({ name, author });
    myBook.save()
    .then(() => {
        console.log("Book has been saved to the db");
        res.status(200).json({ mmsg: "Book saved" });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({ err });
    });
}

const getBookById = (req, res) => {
    const { id } = req.params;
    Book.findById(id)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err));
}

export { getTitleQuery, createBook,createBookPost, getBookById };