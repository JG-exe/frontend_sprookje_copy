import {motion, useAnimation, useMotionValueEvent} from "motion/react";
import {useState} from "react";
import King from "./components/King.jsx";

const goldPiles = [
    {left: "16vw", top: "65vh"},
    {left: "20vw", top: "70vh"},
    {left: "10vw", top: "70vh"},
    {left: "14vw", top: "78vh"},
    {left: "6vw", top: "80vh"},
    {left: "17vw", top: "73vh"},
    {left: "2vw", top: "75vh"},
    {left: "20vw", top: "82vh"},
    {left: "12vw", top: "85vh"},
]



function Scene9({s, center, nightNumber}) {
    const [showBubble, setShowBubble] = useState(false);
    const [showHearts, setShowHearts] = useState(false);
    const amount = (nightNumber + 1) * 3;
    const limitedGold = goldPiles.slice(0, amount);

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
            <m.div style={{opacity: s.sceneFade, pointerEvents: "none"}} className={"parallax-lock night"}>
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
                {limitedGold.map((pile, index) => (
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
                    {nightNumber < 2 ? "The king was so happy, in fact, that he decided it wasn't enough." : "The king was so happy, in fact, that he promptly made her his queen."}
                </m.p>
            {/*TODO: add king element back*/}
                <m.div className={"king parallax-lock topL"}>
                <King center={center} exclamationNumber={nightNumber} kingControls={kingControls} showBubble={showBubble} showHearts={showHearts}/>
                </m.div>
            </m.div>
        </>
    );
}

export default Scene9;