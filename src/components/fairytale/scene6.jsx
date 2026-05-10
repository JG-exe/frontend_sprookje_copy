import {motion} from "motion/react";

function Scene6({s, center}) {
    const m = motion
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
                <m.p className={"parallax-lock txt"} style={{...center, top: "50vh"}}>
                    The king demanded the girl show up at the palace.<br/>
                    <m.span style={{opacity: s.txtOpacity1}}>
                        The daughter, scared to refuse, showed up soon after.
                    </m.span>
                </m.p>
            </m.div>
        </>)
}

export default Scene6