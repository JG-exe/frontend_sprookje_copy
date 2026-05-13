import {useTransform} from "motion/react";

export function useScene13(scrollY, prevSceneEnd) {
    const sceneEnd = prevSceneEnd + 1500;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 150, prevSceneEnd + 800, prevSceneEnd + 850], [0, 1, 1, 0]);

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
    };
}