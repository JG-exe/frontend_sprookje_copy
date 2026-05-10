import { useEffect, useRef } from "react";

export function useFairytaleAudio(isMuted, scene1End, scrollY) {
    const audioRef = useRef(null);
    const targetVolume = 0.5;

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const fadeIn = () => {
            audio.volume = 0;
            audio.play().catch(e => console.error("Error playing audio:", e));

            let volume = 0;
            const fadeInterval = setInterval(() => {
                if (volume < targetVolume) {
                    volume += 0.01;
                    audio.volume = Math.min(volume, targetVolume);
                } else {
                    clearInterval(fadeInterval);
                }
            }, 50);
        };

        const fadeOut = () => {
            let volume = audio.volume;
            const fadeInterval = setInterval(() => {
                if (volume > 0) {
                    volume -= 0.01;
                    audio.volume = Math.max(volume, 0);
                } else {
                    audio.pause();
                    clearInterval(fadeInterval);
                }
            }, 50);
        };

        const handleAudioPlayback = (currentIsScene1Active) => {
            if (!isMuted && currentIsScene1Active) {
                if (audio.paused) fadeIn();
            } else if (!audio.paused) fadeOut();
        };

        const initialIsScene1Active = scrollY.get() >= 50 && scrollY.get() < scene1End;
        handleAudioPlayback(initialIsScene1Active);

        const unsubscribe = scrollY.onChange((latest) => {
            const currentIsScene1Active = latest >= 50 && latest < scene1End;
            handleAudioPlayback(currentIsScene1Active);
        });

        return () => {
            unsubscribe();
            if (!audio.paused) audio.pause();
        };
    }, [isMuted, scene1End, scrollY]);

    return audioRef;
}
