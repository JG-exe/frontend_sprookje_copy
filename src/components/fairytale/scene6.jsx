import {motion} from "motion/react";

function Scene6({ s, center }) {
    const m = motion
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
                <m.p className={"parallax-lock txt"} style={{opacity: s.txtOpacity1, ...center, top: "60vh"}}>
                    The king demanded the girl show up at the palace.
                </m.p>
            </m.div>
        </>)
}

export default Scene6