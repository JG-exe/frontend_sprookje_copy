import Book from "./Book.jsx";
import books from "../../books.json";

const recommendedBooks = (() => {
    const indexes = new Set();
    while (indexes.size < 3) {
        indexes.add(Math.floor(Math.random() * books.length));
    }
    return [...indexes].map((index) => books[index]);
})();

function RecommendedBooks(){
    return(
        <>
            <div className="bookList">
                {recommendedBooks.map((book) => (
                    <Book key={`rec-${book.id}`} book={book}/>
                ))}
            </div>
        </>
    )
}
export default RecommendedBooks;
