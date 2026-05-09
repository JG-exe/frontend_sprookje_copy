import {useTransform} from "motion/react";

export const useScene5 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1400;
    const sceneFade = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 40, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);

    return {
        sceneEnd,
        sceneFade,

    }
}