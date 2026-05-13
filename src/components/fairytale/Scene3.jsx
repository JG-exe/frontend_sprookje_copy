import { motion } from "motion/react";

function Scene3({ s, center }) {
    return (
        <>
            <motion.p className={"parallax-lock txt"} style={{opacity: s.txtOpacity1, ...center, top: "60vh", pointerEvents: "none"}}>
                Meet our unwilling and foolish catalyst.
            </motion.p>
            <motion.div className={"parallax-lock"} style={{opacity: s.sceneFade, pointerEvents: "none"}}>
                <motion.img src="./imgs/01_mill.png" width={"1400px"} className={"backL layer"}
                       style={{...center}}/>
                <motion.img src="./imgs/01_poor_miller_side.png"
                       style={{... center, width: "auto", height: "200px", y: "73vh", x: "-50%", left: "41%"}}
                       className={"parallax-lock topL layer"}
                />
                <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", pointerEvents: "none"}}>
                    <motion.span style={{opacity: s.txtOpacity2}}>The</motion.span>
                    &nbsp;
                    <motion.span style={{opacity: s.txtOpacity3}}>poor</motion.span>
                    &nbsp;
                    <motion.span style={{opacity: s.txtOpacity4}}>miller</motion.span>
                    <br/>
                    <motion.span style={{opacity: s.txtOpacity5}}>If only he was just that...</motion.span>
                </motion.p>
            </motion.div>
        </>
    );
}

export default Scene3;
