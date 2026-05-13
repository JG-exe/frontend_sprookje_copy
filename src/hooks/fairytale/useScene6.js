import {useTransform} from "motion/react";

export const useScene6 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 600;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 40, prevSceneEnd + 90, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 250, prevSceneEnd + 280], [0, 1])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
    }
}