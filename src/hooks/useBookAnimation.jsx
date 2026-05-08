import {useState, useRef, useEffect} from "react";

export const useBookAnimation = (bookId, openBookId, setOpenBookId) => {
    const [status, setStatus] = useState("idle");
    const [originRect, setOriginRect] = useState(null);
    const slotRef = useRef(null);
    const bookRef = useRef(null);

    const isThisBookOpen = openBookId === bookId;
    const isAnyBookOpen = openBookId !== null;

    const handleClick = () => {
        if (isAnyBookOpen) return;
        const rect = slotRef.current.getBoundingClientRect();
        setOriginRect(rect);
        setStatus("opening");
        setOpenBookId(bookId);
    };

    useEffect(() => {
        const current = bookRef.current;
        if (!current) return;
        const style = current.style;
        if (status === "opening" && originRect) {
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
    }, [status, originRect]);

    const handleClose = (e) => {
        e.stopPropagation();
        const current = bookRef.current;
        if (!current) return;
        const style = current.style;

        const rect = slotRef.current.getBoundingClientRect();

        style.top = `${rect.top}px`;
        style.left = `${rect.left}px`;
        style.width = `${rect.width}px`;
        style.transform = `none`;

        requestAnimationFrame(() => {
            if(originRect) {
                style.top = `${originRect.top}px`;
                style.left = `${originRect.left}px`;
                style.width = `${originRect.width}px`;
            }
            setStatus("closing");
        });
    };

    const handleTransitionEnd = (e) => {
        if (e.propertyName !== "width") return;
        if (status === "opening") setStatus("open");
        if (status === "closing") {
            if (bookRef.current) {
                bookRef.current.style.cssText = "";
            }
            setStatus("idle");
            setOpenBookId(null);
        }
    };

    return {
        status,
        slotRef,
        bookRef,
        isThisBookOpen,
        isAnyBookOpen,
        handleClick,
        handleClose,
        handleTransitionEnd,
    };
};
