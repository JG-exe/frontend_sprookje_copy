import {useTransform} from "motion/react";

export const useScene12 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1500;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 150, prevSceneEnd + 900, prevSceneEnd + 950], [0, 1, 1, 0]);
    const openMiddle = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 500], [200, -10]);
    const zoomTrees = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 500], [1.1, 1.4]);
    const moveTreesUp = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 500], [0, -400]);
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 300, prevSceneEnd + 350], [0, 1]);
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 450, prevSceneEnd + 500], [0, 1]);
    const txtOpacity4 = useTransform(scrollY, [prevSceneEnd + 600, prevSceneEnd + 650], [0, 1]);
    const txtOpacity5 = useTransform(scrollY, [prevSceneEnd + 750, prevSceneEnd + 800], [0, 1]);
    const txtOpacity6 = useTransform(scrollY, [prevSceneEnd + 900, prevSceneEnd + 950], [0, 1]);
    const txtOpacity7 = useTransform(scrollY, [prevSceneEnd + 1050, prevSceneEnd + 1100], [0, 1]);
    const txtOpacity8 = useTransform(scrollY, [prevSceneEnd + 1250, prevSceneEnd + 1300], [0, 1]);
    const moveTxtPos = useTransform(scrollY, [prevSceneEnd + 400, sceneEnd], [0, 100])
    const moveTxtNeg = useTransform(scrollY, [prevSceneEnd + 400, sceneEnd], [0, -100])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        openMiddle,
        zoomTrees,
        moveTreesUp,
        txtOpacity2,
        txtOpacity3,
        txtOpacity4,
        txtOpacity5,
        txtOpacity6,
        txtOpacity7,
        txtOpacity8,
        moveTxtNeg,
        moveTxtPos
    }
}