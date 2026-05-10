import { motion, useAnimation, useMotionValueEvent } from "motion/react";

    const kingAnimation = {
        initial: {
            rotate: -90,
            opacity: 0
        },
        animate: {
            rotate: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 15 }
        }
    }

function Scene7({s, center}) {
    const m = motion;

    const kingControls = useAnimation();
    useMotionValueEvent(s.kingJumpTrigger, "change", (v) => {
        kingControls.start(v >= 0.5 ? "animate" : "initial")
    })

    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
                <m.img src="./imgs/02_background_room.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.p className={"parallax-lock"} style={{...center, top: "90vh"}}>
                    <m.span className={"parallax-lock txt"} style={{opacity: s.txtOpacity1, ...center}}>
                    When the girl arrived, she was immediately taken to a cold room full of straw.
                    </m.span>
                    <m.span className={"parallax-lock txt"} style={{opacity: s.txtOpacity2, ...center}}>
                        The king explained to her what he expected.
                    </m.span>
                </m.p>
                <m.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                    ...center,
                    height: "350px",
                    width: "auto",
                    top: "32vh",
                    x: "-50%",
                    left: "40%",
                    y: "0",
                    opacity: 1
                }}/>
                <m.img
                    src="./imgs/02_king_mansplaining.png"
                    className={"topL parallax-lock"}
                    variants={kingAnimation}
                    initial="initial"
                    animate={kingControls}
                    style={{
                        height: "850px",
                        width: "auto",
                        left: "70%",
                        top: "35vh",
                        scaleX: -1,
                        transformOrigin: "center bottom"
                    }}
                />
            </m.div>
        </>
    );
}

export default Scene7