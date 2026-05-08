import "../css/all.css"
import books from "/books.json";
import Book from "../components/Book.jsx";
import RecommendedBooks, { recommendedBooksData } from "../components/RecommendedBooks.jsx";
import { useState } from "react";

function All() {
    const [openBookId, setOpenBookId] = useState(null);
    return (
        <div className="centerCt">
            <div className="recommended">
                <h2>recommended</h2>
                <RecommendedBooks openBookId={openBookId} setOpenBookId={setOpenBookId} />
            </div>
            <br/>
            <div className="allBooks">
                <h2>All books</h2>
                <div className="bookList">
                    {books.map((book) => (
                        <Book key={`all-${book.id}`} book={book} openBookId={openBookId} setOpenBookId={setOpenBookId} />
                    ))}</div>
            </div>
        </div>
    );
}

export default All;
