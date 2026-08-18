import Book from "./Book.jsx";
import books from "../../books.json";
import {useState} from "react";


function RecommendedBooks({openBookId, setOpenBookId}){
    const [recommendedBooksData] = useState(() => {
        const indexes = new Set();
        while (indexes.size < 3) {
            indexes.add(Math.floor(Math.random() * books.length));
        }
        return [...indexes].map((index) => books[index]);
    });

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
