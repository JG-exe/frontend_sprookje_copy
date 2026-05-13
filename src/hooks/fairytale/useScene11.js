import {useTransform} from "motion/react";

export const useScene11 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1500;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 150, prevSceneEnd + 800, prevSceneEnd + 850], [0, 1, 1, 0]);
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 300, prevSceneEnd + 350], [0, 1])
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 500, prevSceneEnd + 550], [0, 1])
    const txtOpacity4 = useTransform(scrollY, [prevSceneEnd + 900, prevSceneEnd + 950], [0, 1])
    const txtOpacity5 = useTransform(scrollY, [prevSceneEnd + 1100, prevSceneEnd + 1150], [0, 1])
    const rumpelOpacity = useTransform(scrollY, [prevSceneEnd + 1200, prevSceneEnd + 1220], [1, 0])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        txtOpacity2,
        txtOpacity3,
        txtOpacity4,
        txtOpacity5,
        rumpelOpacity
    }
}