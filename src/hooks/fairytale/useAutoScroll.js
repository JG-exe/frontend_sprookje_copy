import { useEffect, useRef } from 'react';

export const useAutoScroll = (autoScroll, gone, setAutoScroll) => {
    const positionRef = useRef(null);

    useEffect(() => {
        if (!gone || !autoScroll) {
            cancelAnimationFrame(positionRef.current);
            return;
        }

        const tick = () => {
            window.scrollBy(0, 0.5);
            positionRef.current = requestAnimationFrame(tick);
        };
        positionRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(positionRef.current);
    }, [gone, autoScroll]);

    useEffect(() => {
        const pause = () => setAutoScroll(false);
        window.addEventListener('wheel', pause, { passive: true });
        return () => {
            window.removeEventListener('wheel', pause);
        };
    }, [setAutoScroll]);
};
