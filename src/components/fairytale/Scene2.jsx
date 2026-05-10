import { motion } from "motion/react";

function Scene2({ s2 }) {
    const center = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    };

    return (
        <motion.div style={{opacity: s2.sceneFade,}} className={"parallax-lock"}>
            <motion.div style={{y: s2.zoomYAdjust}}>
                <motion.img src="./imgs/01_layer_back.png"
                       style={{scale: s2.zoomFar}}
                       width={"100%"}
                       className={"backL layer "}
                />
                <motion.div style={{scale: s2.zoomClose}} className={"parallax-lock"}>
                    <motion.img src="./imgs/01_layer_mid_left.png"
                           width={"100%"}
                           className={"middleL layer "}
                           style={{left: s2.openMiddle}}
                    />
                    <motion.img src="./imgs/01_layer_mid_right.png"
                           width={"100%"}
                           className={"middleL layer "}
                           style={{right: s2.openMiddle}}
                    />
                </motion.div>
            </motion.div>
            <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: s2.txtOpacity1}}>There
                once was a kingdom ruled by a really rich king.
            </motion.p>
            <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: s2.txtOpacity2}}>And
                as
                we all know, no-one gets that rich by being good.
            </motion.p>
        </motion.div>
    );
}

export default Scene2;
