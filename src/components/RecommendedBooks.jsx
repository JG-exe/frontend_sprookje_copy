import Book from "./Book.jsx";
import books from "../../books.json";

const recommendedBooksData = (() => {
    const indexes = new Set();
    while (indexes.size < 3) {
        indexes.add(Math.floor(Math.random() * books.length));
    }
    return [...indexes].map((index) => books[index]);
})();

function RecommendedBooks({openBookId, setOpenBookId}){
    return(
        <>
            <div className="bookList">
                {recommendedBooksData.map((book) => (
                    <Book key={`rec-${book.id}`} book={book} openBookId={openBookId} setOpenBookId={setOpenBookId} />
                ))}
            </div>
        </>
    )
}
export default RecommendedBooks;
