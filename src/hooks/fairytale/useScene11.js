import {useTransform} from "motion/react";

export const useScene11 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1300;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 150], [0, 1]);

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
    }
}