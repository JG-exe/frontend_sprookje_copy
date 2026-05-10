import { useState, useEffect, useCallback } from 'react';

export const usePlayback = () => {
    const [gone, setGone] = useState(false);
    const [autoScroll, setAutoScroll] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handleRestart = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setAutoScroll(false);
        setGone(false);
        setIsMuted(true);
    }, []);

    const toggleAutoScroll = useCallback(() => {
        setGone(true);
        setAutoScroll(prev => !prev);
    }, []);

    const toggleMute = useCallback(() => {
        setIsMuted(prev => !prev);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                toggleAutoScroll();
            }
            if (e.code === 'KeyR') {
                handleRestart();
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [handleRestart, toggleAutoScroll]);

    return { gone, setGone, autoScroll, setAutoScroll, handleRestart, toggleAutoScroll, isMuted, toggleMute };
};
