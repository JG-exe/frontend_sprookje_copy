import "../css/all.css"
import books from "/books.json";
import Book from "../components/Book.jsx";
import RecommendedBooks from "../components/RecommendedBooks.jsx";
import {useContext, useState} from "react";
import {SearchContext} from "../contexts/SearchContext.jsx";

function All() {
    const [openBookId, setOpenBookId] = useState(null);
    const { searchQuery } = useContext(SearchContext);

    const filteredBooks = books.filter((book) => {
        const query = searchQuery.toLowerCase();
        return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.creator.toLowerCase().includes(query)
        );
    });

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
                    {filteredBooks.map((book) => (
                        <Book key={`all-${book.id}`} book={book} openBookId={openBookId} setOpenBookId={setOpenBookId} />
                    ))}</div>
            </div>
        </div>
    );
}

export default All;
