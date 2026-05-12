import {motion, useAnimation, useMotionValueEvent} from "motion/react";
import {useState} from "react";

const goldPiles = [
    {left: "16vw", top: "65vh"},
    {left: "20vw", top: "70vh"},
    {left: "10vw", top: "70vh"},
    {left: "14vw", top: "78vh"},
    {left: "6vw", top: "80vh"},
]

const kingAnimation = {
    initial: {
        rotate: 90,
        opacity: 0
    },
    animate: {
        rotate: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 200, damping: 15}
    }
}

const bubble = {
    hidden: {opacity: 0, scale: 0},
    visible: {
        opacity: 1, scale: 1,
        transition: {type: "spring", stiffness: 400, damping: 15}
    }
};
const eyes = {
    hidden: {opacity: 0, scale: 0},
    visible: {
        opacity: 1, scale: 1,
        transition: {type: "spring", stiffness: 400, damping: 15}
    }
};


function Scene9({s, center}) {
    const [showBubble, setShowBubble] = useState(false);
    const [showHearts, setShowHearts] = useState(false);

    useMotionValueEvent(s.bubbleTrigger, "change", (latest) => {
        if (latest >= 0.5) setShowBubble(true)
        else setShowBubble(false)
    });

    useMotionValueEvent(s.heartsTrigger, "change", (latest) => {
        if (latest >= 0.5) setShowHearts(true)
        else setShowHearts(false)
    });

    const m = motion;

    const kingControls = useAnimation();
    useMotionValueEvent(s.kingJumpTrigger, "change", (v) => {
        kingControls.start(v >= 0.5 ? "animate" : "initial")
    })

    return (
        <>
            <m.div style={{opacity: s.sceneFade}} className={"parallax-lock"}>
                <m.img src="./imgs/02_background_room.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                    ...center,
                    height: "450px",
                    width: "auto",
                    top: "32vh",
                    x: "-50%",
                    left: "40%",
                    opacity: 1
                }}/>
                {goldPiles.map((pile, index) => (
                    <img key={index} src="./imgs/02_gold_pile.png" className={"parallax-lock"}
                         style={{width: "auto", height: "150px", ...center, top: pile.top, left: pile.left}}/>))}

                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity1}}>
                    <m.span>
                        The next morning, all the straw was turned into gold!
                    </m.span><br/>
                    <m.span style={{opacity: s.txtOpacity2}}>
                        The greedy king loved what he saw.
                    </m.span>
                </m.p>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity3}}>
                    The king was so happy, in fact, that he decided it wasn't enough.<br/>
                </m.p>
                <m.div className={"topL parallax-lock"}
                       variants={kingAnimation}
                       initial="initial"
                       animate={kingControls}
                       style={{
                           left: "70vw", top: "36vh", height: "850px",
                           width: "auto", transformOrigin: "center bottom"
                       }}>
                    <m.img
                        src="./imgs/02_king_mansplaining.png"
                        className={"middleL"}
                        style={{
                            height: "100%",
                            width: "auto",
                            scaleX: -1,
                        }}
                    />
                    {showHearts && <m.div className={"heartEyes topL"} style={{...center, position: "absolute", top: 107, x: "-40px"}} transition={{delayChildren: .9}}>
                        <m.span variants={eyes} initial="hidden" animate="visible">🩷</m.span>
                        <m.span variants={eyes} initial="hidden" animate="visible">🩷</m.span>
                    </m.div>}
                    {showBubble && <m.div
                        className="speech-bubble"
                        style={{top: "-120px", left: "210px", x: "0", position: "absolute"}}
                        variants={bubble}
                        initial="hidden"
                        animate="visible"
                        transition={{type: "spring", stiffness: 400, damping: 20}}
                    >
                        <img src="./imgs/02_gold_pile.png" height={"80px"}/>
                        <span className={"xxlTxt"}>!</span>
                    </m.div>}
                </m.div>

            </m.div>
        </>
    );
}

export default Scene9;