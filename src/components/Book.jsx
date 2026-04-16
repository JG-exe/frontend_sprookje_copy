import { useState } from "react";
import "../css/book.css";

function Book() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`animate book ${open ? "open" : ""}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="animate cover">
        <div className="front">
          <img
            src="https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-book-cover-design-templates-of-diy-book-covers-of-free-book-cover-design-templates.jpg"
            alt=""
          />
          <div className="info">
            <div className="story">De prinses en de erwt</div>
            <div className="creator">Bozo McNugger the third</div>
          </div>
        </div>

        <div className="back">
          <p>Created for Front-End MCT 2</p>
        </div>
      </div>
      <div className="inner">
        <div className="right half">
          <div className="info">
            <div className="story">De prinses en de erwt</div>
            <div className="creator">Bozo McNugger the third</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
