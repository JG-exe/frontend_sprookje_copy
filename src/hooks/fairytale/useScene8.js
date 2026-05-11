import {useTransform} from "motion/react";

export const useScene8 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1700;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20 , prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 250, prevSceneEnd + 280], [1, 0])
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 290, prevSceneEnd + 320, prevSceneEnd + 550, prevSceneEnd + 600], [0, 1, 1, 0]);
    const rumpelZip = useTransform(scrollY, [prevSceneEnd + 380, prevSceneEnd + 381], [0, 1])
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 620, prevSceneEnd + 660, prevSceneEnd + 1100, prevSceneEnd + 1150], [0,1, 1, 0])
    const txtOpacity4 = useTransform(scrollY, [prevSceneEnd + 850, prevSceneEnd + 900], [0,1])
    const txtOpacity5 = useTransform(scrollY, [prevSceneEnd + 1200, prevSceneEnd + 1250], [0,1])
    const txtOpacity6 = useTransform(scrollY, [prevSceneEnd + 1400, prevSceneEnd + 1450], [0,1])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        txtOpacity2,
        rumpelZip,
        txtOpacity3,
        txtOpacity4,
        txtOpacity5,
        txtOpacity6,
    }
}