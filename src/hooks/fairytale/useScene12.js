import {useTransform} from "motion/react";

export const useScene12 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1500;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 150, prevSceneEnd + 800, prevSceneEnd + 850], [0, 1, 1, 0]);
    const openMiddle = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 500], [200, -10]);
    const zoomTrees = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 500], [1.1, 1.4]);
    const moveTreesUp = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 500], [0, -400])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        openMiddle,
        zoomTrees,
        moveTreesUp
    }
}