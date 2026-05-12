import {motion, useMotionValueEvent} from "motion/react";
import {useState} from "react";

const rumpelSpring = {
    initial: {
        x: "700px",
        scale: 0
    },
    animate: {
        x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 200, damping: 25}
    }
}

const hornOpacity = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {type: "spring", stiffness: 200, damping: 25}
    }
}

function Scene8({s, center}) {
    const [showRumpel, setShowRumpel] = useState(false);
    const [showHorns, setShowHorns] = useState(false);


    useMotionValueEvent(s.rumpelZip, "change", (latest) => {
        if (latest >= 0.5) setShowRumpel(true)
        else setShowRumpel(false)
    });

    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade, zIndex: 2}}>
                <div className={"dimmed"}>
                    <m.img src="./imgs/02_background_room.png" className={"backL layer parallax-lock"}
                           style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                    <m.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                        ...center,
                        height: "450px",
                        width: "auto",
                        top: "50vh",
                        x: "-50%",
                        left: "40%",
                        y: "0",
                        opacity: 1
                    }}/>
                    <m.div className={"rumpel layer parallax-lock topL"}
                           onHoverStart={() => setShowHorns(true)}
                           onHoverEnd={() => setShowHorns(false)}
                           style={{
                               height: "250px", width: "160px", ...center, top: "50vh", left: "60vw"
                           }}
                           variants={rumpelSpring}
                           animate={showRumpel ? "animate" : "initial"} >
                        <m.img src="./imgs/03_rumpelstiltskin_noHorns.png" className={"rumpelImg parallax-lock"}
                               style={{...center}}/>
                        <m.img src="./imgs/03_rumpelstiltskin_horns.png" className={"rumpelImg horns parallax-lock"}
                               style={{...center}} animate={showHorns ? "animate" : "initial"} variants={hornOpacity}
                        />
                    </m.div>
                </div>

                <m.p className={"parallax-lock txt"} style={{...center, top: "2vh", opacity: s.txtOpacity1}}>
                    After the king leaves, the girl starts crying. <br/>
                    How would she ever do this? She couldn't turn straw into gold,<br/>
                    let alone this much in this little time...
                </m.p>
                <m.p className={"txt parallax-lock"} style={{...center, top: "2vh", opacity: s.txtOpacity2}}>
                    Suddenly, out of nowhere, a small imp-like man appeared.<br/>
                    He asked her why she was crying.
                </m.p>
                <m.p className={"txt parallax-lock"} style={{...center, top: "2vh", opacity: s.txtOpacity3}}>
                    She told him the story and how she could never possibly turn this straw into gold.<br/>
                    <m.span style={{opacity: s.txtOpacity4}}>
                        I can do it for you, he said. But what do you have to offer me?
                    </m.span>
                </m.p>
                <m.p className={"txt parallax-lock"} style={{...center, top: "2vh", opacity: s.txtOpacity5}}>
                    She told him she didn't have much, but she had her grandmother's necklace.<br/>
                    <m.span style={{opacity: s.txtOpacity6}}>
                        That will do, the imp said with a smile. Go sleep, it will be done when you wake up.
                    </m.span>
                </m.p>
            </m.div>
        </>
    );
}

export default Scene8;