import {useTransform} from "motion/react";

export const useScene6 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1000;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 50, prevSceneEnd + 90, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 10, prevSceneEnd + 50], [1, 1])
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 10, prevSceneEnd + 50], [0, 1])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        txtOpacity2
    }
}