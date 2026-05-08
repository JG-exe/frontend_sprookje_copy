import {createPortal} from "react-dom";
import "../css/components/book.css";
import {useBookAnimation} from "../hooks/useBookAnimation.jsx";

function Book({book, openBookId, setOpenBookId}) {
    const {
        status,
        slotRef,
        bookRef,
        isThisBookOpen,
        handleClick,
        handleClose,
        handleTransitionEnd,
    } = useBookAnimation(book.id, openBookId, setOpenBookId);

    const bookMarkup = (<div
        key={book.id}
        ref={bookRef}
        className={`animate book ${isThisBookOpen ? status : 'idle'}`}
        id={`book${book.id}`}
        onClick={handleClick}
        onTransitionEnd={handleTransitionEnd}
    >
        <div className="animate cover">
            <div className="front">
                <img
                    src={book.cover || `https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-book-cover-design-templates-of-diy-book-covers-of-free-book-cover-design-templates.jpg`}
                    alt=""/>
                <div className="info animate">
                    <div className="story">{book.title}</div>
                    <div className="author">{book.author}</div>
                    <div className="author">{book.creator}</div>
                </div>
            </div>

            <div className="back">
                <div className="pagectx">

                </div>
            </div>
        </div>
        <div className="inner">
            <div className="right half">
                <div className="pagectx">
                    <div className="info">
                        <div className="story">{book.title}</div>
                        <div className="author">{book.author}</div>
                        <div className="student">{book.creator}</div>
                    </div>
                    <div className={"actions"}>
                        <a href={book.link} className="linkBtn" target={"_blank"}>go to story</a><br/>
                        {isThisBookOpen && status === "open" && <button onClick={handleClose}>close</button>}
                    </div>
                </div>
            </div>
        </div>
    </div>);
    return (<div className="bookSlot" ref={slotRef}>
        {isThisBookOpen ? createPortal(bookMarkup, document.body) : bookMarkup}
    </div>);
}

export default Book;
