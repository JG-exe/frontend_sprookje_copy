import {useTransform} from "motion/react";

export const useScene9 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 800;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20 , prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);

    return {
        sceneEnd,
        sceneFade,
    }
}