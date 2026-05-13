import {motion, useTransform} from "motion/react";

function Scene14({center, s, isTearable}) {
    
    const pointerEvents = useTransform(s.sceneFade, v => v > 0.1 ? "auto" : "none");
    const m = motion
    return (<m.div style={{...center, width: "auto", height: "400px", left: "50%", top: "30vh", pointerEvents, opacity: s.sceneFade}}
                        className={"parallax-lock"}>
        <m.img src="./imgs/03_rumpelstiltskin.png" height="100%"/>
    </m.div>)
}

export default Scene14