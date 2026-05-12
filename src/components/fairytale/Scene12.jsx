import { motion } from "motion/react";

function Scene12({ s, center }) {
    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{ opacity: s.sceneFade, zIndex: 2 }}>
                <m.p className={"parallax-lock txt"} style={{ ...center, top: "45vh", opacity: s.txtOpacity1 }}>
                    Scene 12
                </m.p>
            </m.div>
        </>
    );
}

export default Scene12;