import {useTransform} from "motion/react";

export const useScene5 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1100;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 10, prevSceneEnd + 50, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const carriageX = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 150, prevSceneEnd + 200, prevSceneEnd + 600], [-1030, -1200, -1250, -1700]);
    const carriageY = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 150, prevSceneEnd + 200], [-230, -250, -255])
    const carriageRot = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 200], ["10deg", "0deg"])
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 180, prevSceneEnd + 220],[1, 0])
    const millerOpacity = useTransform(scrollY, [prevSceneEnd + 160, prevSceneEnd + 190],[1, 0])
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 250, prevSceneEnd + 280, sceneEnd - 100, sceneEnd], [0, 1, 1, 0])
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 740, prevSceneEnd + 770], [0, 1])

    return {
        sceneEnd,
        sceneFade,
        carriageX,
        carriageY,
        carriageRot,
        txtOpacity1,
        millerOpacity,
        txtOpacity2,
        txtOpacity3
    }
}