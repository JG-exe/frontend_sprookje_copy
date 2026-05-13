import {useState} from "react";
import {motion, useMotionValueEvent} from "motion/react";

const bubble = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1}
};

function Scene5({s, center}) {
    const [showBubble, setShowBubble] = useState(false);
    const [showBubble2, setShowBubble2] = useState(false);

    useMotionValueEvent(s.carriageX, "change", (latest) => {
        if (latest <= -1680) setShowBubble(true)
        else setShowBubble(false)
    });
    useMotionValueEvent(s.txtOpacity3, "change", (latest) => {
        if (latest >= 0.9) setShowBubble2(true)
        else setShowBubble2(false)
    });

    return (
        <motion.div className={"parallax-lock"} style={{opacity: s.sceneFade, pointerEvents: "none"}}>
            <motion.img src="./imgs/01_king_in_carriage.png" style={{
                ...center, width: "auto", height: "700px", top: "48vh", left: "90dvw",
                y: s.carriageY,
                x: s.carriageX,
                rotate: s.carriageRot,
                transformOrigin: "center bottom"
            }} className={"backL layer"}/>
            <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: s.txtOpacity1}}>
                <motion.span>
                    One day, the king overheard the story of a girl who could turn straw into gold.
                </motion.span>
                <br/>
                <motion.span>
                    Of course, if this was true, he had to have her.
                </motion.span>
            </motion.p>
            <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: s.txtOpacity2}}>
                <motion.span>So he travelled from his palace to the far end of his kingdom to ask the poor miller if it was
                    true.</motion.span>
                <br/>
                <motion.span className={"txt"} style={{opacity: s.txtOpacity3}}>
                    Foolishly, he said yes.
                </motion.span>
            </motion.p>
            <motion.div className={"miller parallax-lock"}
                        style={{top: "50dvh", left: "10dvw", opacity: s.millerOpacity}}>
                <motion.img src="./imgs/01_poor_miller_side_arm.png" className="arm"></motion.img>
                <motion.img src="./imgs/01_poor_miller_side_no_arm.png" className="body"></motion.img>
            </motion.div>
            {showBubble && <motion.div
                className="speech-bubble"
                style={{top: "250px", left: "42%", x: "0", position: "absolute"}}
                variants={bubble}
                initial="hidden"
                animate="visible"
                transition={{type: "spring", stiffness: 400, damping: 20}}
            >
                <img src="./imgs/02_gold_pile.png" height={"80px"}/>
                <span className={"xxlTxt"}>?</span>
            </motion.div>}
            {showBubble2 && <motion.div
                className="speech-bubble"
                style={{top: "380px", left: "13.4%", x: "0", position: "absolute"}}
                variants={bubble}
                initial="hidden"
                animate="visible"
                transition={{type: "spring", stiffness: 400, damping: 20}}
            >
                <span className={"xxlTxt"}>👍</span>
            </motion.div>}
        </motion.div>
    );
}

export default Scene5;
