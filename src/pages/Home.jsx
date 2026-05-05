import books from "../../books.json";
import Book from "../components/Book.jsx";
import {useMemo} from "react";

function Home() {
    const recommendedBooks = useMemo(() => {
        const indexes = new Set();
        while (indexes.size < 3) {
            indexes.add(Math.floor(Math.random() * books.length));
        }
        return [...indexes].map((index) => books[index]);
    }, [])

    return (
        <>
            <div className={"centerCt"}>
                <div className="recommended centerCt">
                    <h2>In the spotlight</h2>
                    <div className={"bookList"}>
                        {recommendedBooks.map((book) => (
                            <Book key={book.id} book={book}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
