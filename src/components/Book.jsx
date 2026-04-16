import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "../css/book.css";

function Book({ book }) {
  const [status, setStatus] = useState("idle");
  const [originRect, setOriginRect] = useState(null);
  const slotRef = useRef(null);
  const bookRef = useRef(null);

  const handleClick = () => {
    if (status !== "idle") return;
    const rect = slotRef.current.getBoundingClientRect();
    setOriginRect(rect);
    setStatus("opening");
  };

  useEffect(() => {
    const current = bookRef.current;
    const style = current.style;
    if (status === "opening" && bookRef.current && originRect) {
      style.top = `${originRect.top}px`;
      style.left = `${originRect.left}px`;
      style.width = `${originRect.width}px`;
      style.transform = `none`;

      requestAnimationFrame(() => {
        style.top = "";
        style.left = "";
        style.width = "";
        style.transform = "";
      });
    }
  });

  const handleClose = (e) => {
    e.stopPropagation();
    console.log("click");
    const current = bookRef.current;
    const style = current.style;

    const rect = slotRef.current.getBoundingClientRect();

    style.top = `${rect.top}px`;
    style.left = `${rect.left}px`;
    style.width = `${rect.width}px`;
    style.transform = `none`;

    requestAnimationFrame(() => {
      style.top = `${originRect.top}px`;
      style.left = `${originRect.left}px`;
      style.width = `${originRect.width}px`;
      setStatus("closing");
    });
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== "width") return;
    if (status === "opening") setStatus("open");
    if (status === "closing") {
      bookRef.current.style.cssText = "";
      setStatus("idle");
    }
  };

  const bookMarkup = (
    <div
      ref={bookRef}
      className={`animate book ${status}`}
      id={`book${book.id}`}
      onClick={handleClick}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="animate cover">
        <div className="front">
          <img src={book.cover} alt="" />
          <div className="info animate">
            <div className="story">{book.title}</div>
            <div className="creator">{book.author}</div>
            <div className="creator">{book.creator}</div>
          </div>
        </div>

        <div className="back">
          <div className="pagectx">
            <p>Created for Front-End MCT 2</p>
          </div>
        </div>
      </div>
      <div className="inner">
        <div className="right half">
          <div className="pagectx">
            <div className="info">
              <div className="story">{book.title}</div>
              <div className="creator">{book.author}</div>
              <div className="creator">{book.creator}</div>
            </div>
            <button>go to story</button>
            {status === "open" && <button onClick={handleClose}>close</button>}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="bookSlot" ref={slotRef}>
      {status === "idle" ? bookMarkup : createPortal(bookMarkup, document.body)}
    </div>
  );
}

export default Book;
