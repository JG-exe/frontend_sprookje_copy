import { useTransform } from "motion/react";

export const useScene4 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1400;
    const sceneFade = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 40, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 50, prevSceneEnd + 100], [0, 1]);
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 150, prevSceneEnd + 200], [0, 1]);
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 250, prevSceneEnd + 300], [0, 1]);
    const txtOpacity4 = useTransform(scrollY, [prevSceneEnd + 450, prevSceneEnd + 490], [0, 1]);
    const txtOpacity5 = useTransform(scrollY, [prevSceneEnd + 600, prevSceneEnd + 640], [0, 1]);
    const txtOpacity6 = useTransform(scrollY, [prevSceneEnd + 750, prevSceneEnd + 790], [0, 1]);

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        txtOpacity2,
        txtOpacity3,
        txtOpacity4,
        txtOpacity5,
        txtOpacity6
    };
};
