import {useTransform} from "motion/react";

export function useScene14(scrollY, prevSceneEnd) {
    const sceneEnd = prevSceneEnd + 900;
    const sceneFade = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 40, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);

    return {
        sceneEnd,
        sceneFade,
    };
}