import {motion, useMotionValueEvent, useTransform} from "motion/react";
import Rumpel from "./components/Rumpel.jsx";
import {useState} from "react";

const bubble = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1}
};

function Scene13({ s, center }) {
    const [showBubble, setShowBubble] = useState(false);
    const pointerEvents = useTransform(s.sceneFade, v => v > 0.1 ? "auto" : "none");

    useMotionValueEvent(s.bubbleTrigger, "change", (latest) => {
        if (latest > 0.5) setShowBubble(true)
        else setShowBubble(false)
    });

    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{ opacity: s.sceneFade, zIndex: 2, pointerEvents}}>
                <m.img src="./imgs/04_grand_hall.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.div className={"middleL parallax-lock"}
                       style={{...center, width: "250px", height: "400px", top: "39vh", left: "66vw", pointerEvents}}>
                    <m.img src="./imgs/04_queen_happy.png" width="100%" height="100%" className={"layer parallax-lock"} style={{opacity: s.queenHappy}}/>
                    {showBubble && <m.div
                        className="speech-bubble"
                        style={{...center, top: "-100px", left: "48%", x: "0", position: "absolute"}}
                        variants={bubble}
                        initial="hidden"
                        animate="visible"
                        transition={{type: "spring", stiffness: 400, damping: 20}}>
                        <span>Is your name
                        <form>
                            <input type={"text"} name={"name"} autoComplete="off"></input>
                        </form>?
                        </span>
                    </m.div>}
                </m.div>
                <Rumpel center={center} showRumpel={true} className={"mirror"} scale={-1} top={"60vh"} left={"40vw"} pointerEvents={pointerEvents}/>
                <m.p className={"parallax-lock txt"} style={{ ...center, top: "88vh", opacity: s.txtOpacity1 }}>
                    The creature was certain she would finally concede. After all, the three days were up and there was no way she would guess his name.<br/>
                    The queen asked for one more attempt. Mockingly, the imp agreed.
                </m.p>
            </m.div>
        </>
    );
}

export default Scene13;