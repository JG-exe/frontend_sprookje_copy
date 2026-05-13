import {motion} from "motion/react";
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

const hornOpacity = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {type: "spring", stiffness: 200, damping: 25}
    }
}

function Rumpel({showRumpel, center, scale = 1, top, left, opacity = 1}) {
    const [showHorns, setShowHorns] = useState(false);
    const m = motion;

    return (
        <m.div className={"rumpel layer parallax-lock topL"}
               onHoverStart={() => setShowHorns(true)}
               onHoverEnd={() => setShowHorns(false)}
               style={{
                   height: "250px", width: "160px", ...center, top: top, left: left, opacity
               }}
               variants={rumpelSpring}
               animate={showRumpel ? "animate" : "initial"}>
            <m.img src="./imgs/03_rumpelstiltskin_noHorns.png" className={"rumpelImg"}
                   style={{...center,  scaleX: scale}}/>
            <m.img src="./imgs/03_rumpelstiltskin_horns.png" className={"rumpelImg horns"}
                   style={{...center,  scaleX: scale}} animate={showHorns ? "animate" : "initial"} variants={hornOpacity}
            />
        </m.div>
    );
}

export default Rumpel;