import {motion, useTransform} from "motion/react";

function Scene14({center, s, isTearable}) {
    const pointerEvents = useTransform(s.sceneFade, v => v > 0.1 ? "auto" : "none");
    console.log(pointerEvents)
    const m = motion
    return (
        <m.div className={"parallax-lock"} style={{
            pointerEvents,
            opacity: s.sceneFade, height: "100vh"
        }}>
            <m.div style={{
                ...center,
                width: "275px",
                height: "393px",
                left: "50%",
                top: "30vh",
                pointerEvents,
                opacity: s.sceneFade,
            }} className={"parallax-lock topL"}>
                {isTearable ?
                    <>
                        <m.img src="./imgs/05_rumpelstiltskin_top.png" height="100%" drag
                               style={{position: "absolute", width: "auto", height: "280px", top: "0", right: 0}}/>
                        <m.img src="./imgs/05_rumpelstiltskin_bottom.png" height="100%" drag
                               style={{position: "absolute", width: "auto", height: "270px", bottom: 0, left: 0}}/>
                    </>
                    : <>
                        <m.img src="./imgs/03_rumpelstiltskin.png" height="100%"/>
                    </>
                }
            </m.div>
            <m.p className={"parallax-lock txt"} style={{pointerEvents: "none", top: "85vh", ...center}}>
                {isTearable ?
                    <m.span>Enraged, he pulled his leg while screaming in anger.<br/>"You can't know that! You can't know that!"<br/>What would happen if you try to pull his leg?</m.span> :
                    <m.span>He laughs, as he is now certain you don't know.<br/>He demands the queen's child and disappears into the night.</m.span>
                }
            </m.p>
        </m.div>
    )
}

export default Scene14