import {motion} from "motion/react";

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
const m = motion;

function King({center, exclamationNumber, kingControls, showBubble, showHearts}){
    return (<>
        <m.div className={"topL parallax-lock king"}
               variants={kingAnimation}
               initial="initial"
               animate={kingControls}
               style={{
                    height: "850px",
                   width: "auto", transformOrigin: "center bottom",
                   left: "70vw",
                   top: "15vw"
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
            {showBubble && <m.div
                className="speech-bubble"
                style={{top: "-120px", left: "210px", x: "0", position: "absolute"}}
                variants={bubble}
                initial="hidden"
                animate="visible"
                transition={{type: "spring", stiffness: 400, damping: 20}}>
                <img src="./imgs/02_gold_pile.png" height={"80px"}/>
                <span className={"xxlTxt"}>{"!".repeat(exclamationNumber + 1)}</span>
            </m.div>}
            {showHearts && <m.div className={"heartEyes topL"} style={{...center, position: "absolute", top: 107, x: "-40px"}} transition={{delayChildren: .9}}>
                <m.span variants={eyes} initial="hidden" animate="visible">🩷</m.span>
                <m.span variants={eyes} initial="hidden" animate="visible">🩷</m.span>
            </m.div>}
        </m.div>

    </>)
}

export default King