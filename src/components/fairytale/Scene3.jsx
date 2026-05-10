import { motion } from "motion/react";

function Scene3({ s3 }) {
    const center = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    };

    return (
        <>
            <motion.p className={"parallax-lock txt"} style={{opacity: s3.txtOpacity1, ...center, top: "60vh"}}>
                Meet our unwilling and foolish catalyst.
            </motion.p>
            <motion.div className={"parallax-lock"} style={{opacity: s3.sceneFade}}>
                <motion.img src="./imgs/01_mill.png" width={"72%"} className={"backL layer "}
                       style={{...center, top: "10px"}}/>
                <motion.img src="./imgs/01_poor_miller_side.png"
                       style={{scale: 0.06, y: "-50%", x: "-50%", left: "41%", top: "83vh"}}
                       className={"parallax-lock topL layer"}
                />
                <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh"}}>
                    <motion.span style={{opacity: s3.txtOpacity2}}>The</motion.span>
                    &nbsp;
                    <motion.span style={{opacity: s3.txtOpacity3}}>poor</motion.span>
                    &nbsp;
                    <motion.span style={{opacity: s3.txtOpacity4}}>miller</motion.span>
                    <br/>
                    <motion.span style={{opacity: s3.txtOpacity5}}>If only he was just that...</motion.span>
                </motion.p>
            </motion.div>
        </>
    );
}

export default Scene3;
