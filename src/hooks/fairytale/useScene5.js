import {useTransform} from "motion/react";

export const useScene5 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1400;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 10, prevSceneEnd + 50, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const carriageX = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 150, prevSceneEnd + 200], [-230, -400, -450]);
    const carriageY = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 150, prevSceneEnd + 200], [-230, -250, -260])
    const carriageRot = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 200], ["10deg", "0deg"])

    return {
        sceneEnd,
        sceneFade,
        carriageX,
        carriageY,
        carriageRot
    }
}