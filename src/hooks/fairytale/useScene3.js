import { useTransform } from "motion/react";

export const useScene3 = (scrollY, prevSceneEnd) => {
    const sceneEnd = prevSceneEnd + 800;
    const txtOpacity1 = useTransform(scrollY, [prevSceneEnd, prevSceneEnd + 40, prevSceneEnd + 200, prevSceneEnd + 250], [0, 1, 1, 0]);
    const txtOpacity2 = useTransform(scrollY, [prevSceneEnd + 300, prevSceneEnd + 310, prevSceneEnd + 500, prevSceneEnd + 550], [0, 1, 1, 0]);
    const txtOpacity3 = useTransform(scrollY, [prevSceneEnd + 340, prevSceneEnd + 350, prevSceneEnd + 500, prevSceneEnd + 550], [0, 1, 1, 0]);
    const txtOpacity4 = useTransform(scrollY, [prevSceneEnd + 380, prevSceneEnd + 390, prevSceneEnd + 500, prevSceneEnd + 550], [0, 1, 1, 0]);
    const txtOpacity5 = useTransform(scrollY, [prevSceneEnd + 490, prevSceneEnd + 530], [0, 1]);
    const sceneFade = useTransform(scrollY, [prevSceneEnd + 250, prevSceneEnd + 290, prevSceneEnd + 750, sceneEnd], [0, 1, 1, 0]);

    return {
        sceneEnd,
        txtOpacity1,
        txtOpacity2,
        txtOpacity3,
        txtOpacity4,
        txtOpacity5,
        sceneFade
    };
};
