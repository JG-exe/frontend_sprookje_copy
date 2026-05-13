import {motion, useTransform} from "motion/react";
import Rumpel from "./components/Rumpel.jsx";

function Scene13({ s, center }) {
    const pointerEvents = useTransform(s.sceneFade, v => v > 0.1 ? "auto" : "none");
    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{ opacity: s.sceneFade, zIndex: 2, pointerEvents}}>
                <m.img src="./imgs/04_grand_hall.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.div className={"middleL parallax-lock"}
                       style={{...center, width: "250px", height: "400px", top: "38vh", left: "68vw", pointerEvents: "none"}}>
                    <m.img src="./imgs/04_queen_happy.png" width="100%" height="100%" className={"layer parallax-lock"}
                           style={{opacity: s.queenHappy}}/>
                </m.div>
                <Rumpel center={center} showRumpel={true} className={"mirror"} scale={-1} top={"60vh"} left={"40vw"} pointerEvents={pointerEvents}/>
                <m.p className={"parallax-lock txt"} style={{ ...center, top: "88vh", opacity: s.txtOpacity1 }}>

                </m.p>
            </m.div>
        </>
    );
}

export default Scene13;