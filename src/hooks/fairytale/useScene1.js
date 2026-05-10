import { useTransform } from "motion/react";

export const useScene1 = (scrollY) => {
    const SCENE_END = 1980;
    const scene = useTransform(scrollY, [0, SCENE_END, SCENE_END + 1], [0, 0, -1080]);
    const aLongTimeTxt = useTransform(scrollY, [250, 300, 500, 530], [0, 1, 1, 0]);
    const rumpelOpacity = useTransform(scrollY, [575, 580], [0, 1]);
    const rumpelScale = useTransform(scrollY, [570, 900, 950], [3, .4, 0]);
    const txt1 = useTransform(scrollY, [950, 2000], [1400, -1800]);
    const crawlRotateX = useTransform(scrollY, [950, 2000], [20, 35]);
    const crawlOpacity = useTransform(scrollY, [0, 950, 1700, 1950], [0, 1, 1, 0]);
    const crawlScale = useTransform(scrollY, [950, 2000], ["100%", "10%"]);

    return {
        sceneEnd: SCENE_END,
        scene,
        aLongTimeTxt,
        rumpelOpacity,
        rumpelScale,
        txt1,
        crawlRotateX,
        crawlOpacity,
        crawlScale
    };
};
