import {useTransform} from "motion/react";

export const useScene8 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 800;
    const sceneFade = useTransform(scrollY, [prevSceneEnd -10 , prevSceneEnd + 40, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const rumpelZip = useTransform(scrollY, [prevSceneEnd + 300, prevSceneEnd + 301], [0, 1])

    return {
        sceneEnd,
        sceneFade,
        rumpelTrigger: rumpelZip
    }
}