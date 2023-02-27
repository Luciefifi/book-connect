import {Book} from "../models/book";


class BookController{
 getAllBooks = async (req, res) => {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
}
  export default BookController
  
  