import {motion, useMotionValueEvent} from "motion/react";
import {useState} from "react";

const rumpelSpring = {
    initial: {
        x: "700px",
        scale: 0
    },
    animate: {
        x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 200, damping: 25}
    }
}

function Scene8({s, center}) {
    const [showRumpel, setShowRumpel] = useState(false);

    useMotionValueEvent(s.rumpelTrigger, "change", (latest) => {
        if (latest >= 0.5) setShowRumpel(true)
        else setShowRumpel(false)
    });

    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
                <m.img src="./imgs/02_background_room.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                    ...center,
                    height: "350px",
                    width: "auto",
                    top: "32vh",
                    x: "-50%",
                    left: "40%",
                    y: "0",
                    opacity: 1
                }}/>
                <m.div className={"rumpel middleL layer parallax-lock"}
                       style={{
                           height: "300px", width: "auto", ...center, top: "55vh", left: "60vw"
                       }}
                       variants={rumpelSpring}
                animate={showRumpel ? "animate" : "initial"}>
                    <m.img src="./imgs/03_rumpelstiltskin_noHorns.png" className={"rumpelImg"}
                           style={{...center}}/>
                    <m.img src="./imgs/03_rumpelstiltskin_horns.png" className={"rumpelImg"}
                           style={{...center}}/>
                </m.div>
            </m.div>
        </>
    );
}

export default Scene8;