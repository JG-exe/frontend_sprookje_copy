import { useTransform } from "motion/react";

export const useScene2 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 600;
    const sceneFade = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 100, prevSceneEnd + 550, sceneEnd], [0, 1, 1, 0]);
    const openMiddle = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 900], [0, -1100]);
    const zoomClose = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 900], [1, 1.4]);
    const zoomFar = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 900], [1, 1.2]);
    const zoomYAdjust = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 900], [0, -40]);
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd - 10, prevSceneEnd + 200, prevSceneEnd + 300], [1, 1, 0]);
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 290, prevSceneEnd + 350, prevSceneEnd + 500, prevSceneEnd + 550], [0, 1, 1, 0]);

    return {
        sceneEnd,
        sceneFade,
        openMiddle,
        zoomClose,
        zoomFar,
        zoomYAdjust,
        txtOpacity1,
        txtOpacity2
    };
};
