import {useTransform} from "motion/react";

export const useScene9 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 1300;
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 20, prevSceneEnd + 80, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const kingJumpTrigger = useTransform(scrollY, [prevSceneEnd + 250, prevSceneEnd + 251], [0, 1])
    const bubbleTrigger = useTransform(scrollY, [prevSceneEnd + 600, prevSceneEnd + 601], [0, 1])
    const heartsTrigger = useTransform(scrollY, [prevSceneEnd + 350, prevSceneEnd + 351], [0, 1])
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 650, prevSceneEnd + 700], [1, 0])
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 320, prevSceneEnd + 360], [0, 1])
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 900, prevSceneEnd + 940], [0, 1])
    
    return {
        sceneEnd,
        sceneFade,
        kingJumpTrigger,
        bubbleTrigger,
        heartsTrigger,
        txtOpacity1,
        txtOpacity2,
        txtOpacity3,
    }
}