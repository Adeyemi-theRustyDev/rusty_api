import { Router } from "express";
import { createBook, createBookPost, getBookById, getTitleQuery } from "../controller/bookController.js";

const router = Router();


router.get('/?title', getTitleQuery);

router.get('/create', createBook);

router.post('/create', createBookPost);

router.get('/bk_:id', getBookById);

export default router;