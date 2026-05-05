import books from "../../books.json";
import Book from "../components/Book.jsx";
import {useMemo} from "react";
import {Link} from "react-router";

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
                <h2>In the spotlight</h2>
                <div className="centerCt">
                    <div className={"bookList show"}>
                        {recommendedBooks.map((book) => (
                            <Book key={book.id} book={book}/>
                        ))}
                    </div>
                </div>
                <div className={"centerCt centerTxt"}>
                    <Link to="/All" className={"linkBtn"}>ALL STORIES</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
