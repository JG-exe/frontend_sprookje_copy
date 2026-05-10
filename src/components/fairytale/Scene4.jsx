import { useState } from "react";
import { motion } from "motion/react";

function Scene4({ s }) {
    const [millerHover, setMillerHover] = useState(false);
    const center = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    };

    return (
        <motion.div className={"millerScene"} style={{opacity: s.sceneFade, top: "0"}}>
            <motion.div className={"miller parallax-lock"} onHoverStart={() => setMillerHover(true)}
                   onHoverEnd={() => setMillerHover(false)}>
                {millerHover && s.txtOpacity4.get() > 0 && (
                    <motion.div
                        className={"speech-bubble"}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2, type: "spring", stiffness: 600, damping: 20}}
                    >
                        <img src="./imgs/01_poor_girl.png" height={"100px"}/>
                        <span className={"xxlTxt"}>=</span>
                        <img src="./imgs/02_gold_pile.png" height={"100px"}/>
                    </motion.div>
                )}
                <motion.img src="./imgs/01_poor_miller_side_arm.png" className="arm"></motion.img>
                <motion.img src="./imgs/01_poor_miller_side_no_arm.png" className="body"></motion.img>
            </motion.div>
            <motion.div className={"parallax-lock"}>
                <motion.p
                    className={"txt txtLeft parallax-lock"}
                    style={{...center, top: "30vh", left: "30%", opacity: s.txtOpacity1}}
                >
                    <span>But no...</span>
                    <br/>
                    <motion.span style={{opacity: s.txtOpacity2}}>He LOVED boasting about things.</motion.span>
                    <br/>
                    <motion.span style={{opacity: s.txtOpacity3}}>EVEN if those things weren't always true.</motion.span>
                    <br/>
                    <motion.span style={{opacity: s.txtOpacity4}}>Like about his daughter for example.</motion.span>
                </motion.p>
                <motion.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                    ...center,
                    scale: 0.06,
                    top: "-192%",
                    x: "-45%",
                    y: "0",
                    opacity: s.txtOpacity4
                }}/>
                <motion.p className={"txt parallax-lock"} style={{...center, top: "85vh"}}>
                    <motion.span style={{opacity: s.txtOpacity5}}>He would tell everyone who wanted to hear how his
                        daughter could turn straw into gold by spinning it.
                    </motion.span>
                    <br/>
                    <motion.span style={{opacity: s.txtOpacity6}}>And everyone who didn't want to hear it, but
                        happened to cross him...<br/>They got to hear it too. Try to pass him without making him
                        mention it, I dare you!
                    </motion.span>
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default Scene4;
