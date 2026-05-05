import "../css/components/all.css"

import books from "/books.json";
import Book from "../components/Book.jsx";
import {useMemo} from "react";

function All() {
    const recommendedBooks = useMemo(() => {
        const indexes = new Set();
        while (indexes.size < 3) {
            indexes.add(Math.floor(Math.random() * books.length));
        }
        return [...indexes].map((index) => books[index]);
    }, [])
    return (
        <div className="centerCt">
            <div className="recommended">
                <h2>recommended</h2>
                <div className="bookList">
                    {recommendedBooks.map((book) => (
                        <Book key={`rec-${book.id}`} book={book}/>
                    ))}
                </div>
            </div>
            <br/>
            <div className="allBooks">
                <h2>All books</h2>
                <div className="bookList">
                    {books.map((book) => (
                        <Book key={book.id} book={book}/>
                    ))}</div>
            </div>
        </div>
    );
}

export default All;
