import books from "/books.json";
import Book from "../components/Book.jsx";

function All() {
  return (
    <div className="centerCt">
      <div className="recommended">
        <p>recommended</p>
      </div>
      <div className="bookList">
        <p>This holds all tales</p>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default All;
