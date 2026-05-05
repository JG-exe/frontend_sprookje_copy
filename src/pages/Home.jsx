import books from "../../books.json";
import Book from "../components/Book.jsx";

function Home() {

    return (
        <>
            <div className="gridHalf">
                <div className="centerCt">
                    <h2>In the spotlight</h2>
                    <div className={"bookList"}>
                        {books.map((book) => (
                            <Book key={book.id} book={book}/>
                        ))}
                    </div>
                </div>
                <div className="centerCt">
                    <h2>Made by yours truly:</h2>
                </div>
            </div>
        </>
    );
}

export default Home;
