import books from "/books.json";
import Book from "../components/Book.jsx";
import RecommendedBooks from "../components/RecommendedBooks.jsx";

function All() {
    return (
        <div className="centerCt">
            <div className="recommended">
                <h2>recommended</h2>
                <RecommendedBooks/>
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
