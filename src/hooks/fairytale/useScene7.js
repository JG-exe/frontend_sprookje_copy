import {useTransform} from "motion/react";

export const useScene7 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 800;
    const sceneFade = useTransform(scrollY, [prevSceneEnd , prevSceneEnd + 60, sceneEnd - 100, sceneEnd], [0, 1, 1, 0]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd + 200, prevSceneEnd + 240], [1, 0])
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 230, prevSceneEnd + 280], [0, 1])
    const kingOpacity = useTransform(scrollY, [prevSceneEnd + 200, prevSceneEnd + 250],[0, 1])
    const kingJumpTrigger = useTransform(scrollY, [prevSceneEnd + 210, prevSceneEnd + 211], [0, 1]);
    const bubbleTrigger = useTransform(scrollY, [prevSceneEnd + 280, prevSceneEnd + 281], [0, 1])
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 380, prevSceneEnd + 410],[0, 1])

    return {
        sceneEnd,
        sceneFade,
        txtOpacity1,
        txtOpacity2,
        kingOpacity,
        kingJumpTrigger,
        bubbleTrigger,
        txtOpacity3
    }
}