import books from "/books.json";
import Book from "../components/Book.jsx";

function All() {
  return (
    <div className="centerCt">
      <div className="recommended books">
        <p>recommended</p>
      </div>
      <div className="bookList">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <p>This holds all tales</p>
    </div>
  );
}

export default All;
