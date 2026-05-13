import {motion, useMotionValueEvent, useTransform} from "motion/react";
import {useState} from "react";

const bubble = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1}
};


function Scene13({s, center, onSolve, isTearable}) {
    const [showBubble, setShowBubble] = useState(false);

    const pointerEvents = useTransform(s.sceneFade, v => v > 0.1 ? "auto" : "none");

    useMotionValueEvent(s.bubbleTrigger, "change", (latest) => {
        if (latest > 0.5) setShowBubble(true)
        else setShowBubble(false)
    });

    const submitHandler = (e) => {
        const bubble = document.getElementById("guessBubble")
        e.preventDefault()

        const guess = e.target.name.value;
        if (guess.toLowerCase() === "rumpelstiltskin") {
            setShowBubble(false)
            onSolve()
        } else {
            bubble.classList.add("shake");
            bubble.addEventListener("animationend", () => {
                bubble.classList.remove("shake");
            }, {once: true})
            e.target.name.value = "";
        }
    }

    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade, zIndex: 2, pointerEvents}}>
                <m.img src="./imgs/04_grand_hall.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.div className={"middleL parallax-lock"}
                       style={{...center, width: "250px", height: "400px", top: "39vh", left: "66vw", pointerEvents}}>
                    <m.img src="./imgs/04_queen_happy.png" width="100%" height="100%" className={"layer parallax-lock"}
                           style={{opacity: s.queenHappy}}/>
                    {showBubble && <m.div
                        className="speech-bubble"
                        id="guessBubble"
                        style={{...center, top: "-100px", left: "35%", x: "0", position: "absolute"}}
                        variants={bubble}
                        initial="hidden"
                        animate="visible"
                        transition={{type: "spring", stiffness: 400, damping: 20}}>
                        <span>Is your name
                        <form onSubmit={submitHandler}>
                            <input type={"text"} id={"name"} autoComplete="off"></input>
                            <input type={"submit"} value={"?"} className={"btn"}></input>
                        </form>
                        </span>
                    </m.div>}
                </m.div>
                <m.img src="./imgs/03_rumpelstiltskin.png" className={"rumpelImg parallax-lock"} style={{
                    ...center,
                    height: "250px",
                    width: "160px",
                    top: "60vh",
                    left: "50vw",
                    scaleX: -1,
                }}
                />
                <m.p className={"parallax-lock txt"} style={{...center, top: "88vh", opacity: s.txtOpacity1}}>
                    The creature was certain she would finally concede. After all, the three days were up and there was
                    no way she would guess his name.<br/>
                    The queen asked for one more attempt. Mockingly, the imp agreed.
                </m.p>
            </m.div>
        </>
    );
}

export default Scene13;