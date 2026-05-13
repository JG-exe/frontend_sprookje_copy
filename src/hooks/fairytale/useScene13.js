import {useTransform} from "motion/react";

export function useScene13(scrollY, prevSceneEnd) {
    const sceneEnd = prevSceneEnd + 900;
    const sceneFade = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 40, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 150, prevSceneEnd + 800, prevSceneEnd + 850], [0, 1, 1, 0]);
    const rumpelZip = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 101], [0, 1]);
    const bubbleTrigger = useTransform(scrollY, [prevSceneEnd + 100, prevSceneEnd + 101], [0, 1])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        rumpelZip,
        bubbleTrigger,
    };
}