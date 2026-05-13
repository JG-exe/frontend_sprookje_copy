import {useTransform} from "motion/react";

export const useScene10 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1200;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, prevSceneEnd + 380, prevSceneEnd + 430, prevSceneEnd + 470, sceneEnd - 100, sceneEnd], [0, 1, 1, 0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 430, prevSceneEnd + 431], [1, 0])
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 200, prevSceneEnd + 250], [0, 1])
    const queenHappy = useTransform(scrollY, [prevSceneEnd + 429, prevSceneEnd + 430], [1,0])
    const queenSad = useTransform(scrollY, [prevSceneEnd + 429, prevSceneEnd + 430], [0, 1])
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 429, prevSceneEnd + 430], [0, 1])
    const txtOpacity4 = useTransform(scrollY, [prevSceneEnd + 720, prevSceneEnd + 760], [0, 1])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        txtOpacity2,
        queenHappy,
        queenSad,
        txtOpacity3,
        txtOpacity4
    }
}