import {motion} from "motion/react";

function Scene11({s, center}) {

    const m = motion;

    return (
        <>
            <m.div style={{opacity: s.sceneFade, pointerEvents: "none"}} className={"parallax-lock"}>
                <m.p className={"parallax-lock txt"} style={{...center, top: "50vh", opacity: s.txtOpacity1}}>
                    Scene 11
                </m.p>
            </m.div>
        </>
    );
}

export default Scene11;