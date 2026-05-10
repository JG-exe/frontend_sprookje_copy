import { motion } from "motion/react";

function Scene2({ s, center }) {
    return (
        <motion.div style={{opacity: s.sceneFade,}} className={"parallax-lock"}>
            <motion.div style={{y: s.zoomYAdjust}}>
                <motion.img src="./imgs/01_layer_back.png"
                       style={{scale: s.zoomFar}}
                       width={"100%"}
                       className={"backL layer "}
                />
                <motion.div style={{scale: s.zoomClose}} className={"parallax-lock"}>
                    <motion.img src="./imgs/01_layer_mid_left.png"
                           width={"100%"}
                           className={"middleL layer "}
                           style={{left: s.openMiddle}}
                    />
                    <motion.img src="./imgs/01_layer_mid_right.png"
                           width={"100%"}
                           className={"middleL layer "}
                           style={{right: s.openMiddle}}
                    />
                </motion.div>
            </motion.div>
            <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: s.txtOpacity1}}>There
                once was a kingdom ruled by a really rich king.
            </motion.p>
            <motion.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: s.txtOpacity2}}>And
                as
                we all know, no-one gets that rich by being good.
            </motion.p>
        </motion.div>
    );
}

export default Scene2;
