import {useState} from "react";
import {motion, useMotionValueEvent} from "motion/react";

function Scene6({ s }) {

    return(
        <>
            <motion.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
            <p>scene 6</p>
            </motion.div>
    </>)
}

export default Scene6