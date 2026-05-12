import {motion} from "motion/react";

function Scene10({s, center}) {

    const m = motion;

    return (
        <>
            <m.div style={{opacity: s.sceneFade, pointerEvents: "none"}} className={"parallax-lock"}>
                <m.img src="./imgs/04_grand_hall.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.div className={"middleL parallax-lock"}
                       style={{...center, width: "250px", height: "400px", top: "38vh", left: "68vw"}}>
                    <m.img src="./imgs/04_queen_happy.png" width="100%" height="100%" className={"layer parallax-lock"}
                           style={{opacity: s.queenHappy}}/>
                    <m.img src="./imgs/04_queen_happy_and_baby.png" width="100%" height="100%"
                           className={"layer parallax-lock"} style={{opacity: s.queenSad}}/>
                </m.div>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity1}}>
                    The girl became queen and years passed peacefully.<br/>
                    All was good.&nbsp;
                    <m.span style={{opacity: s.txtOpacity2}}>
                        Until...
                    </m.span>
                </m.p>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity3}}>
                    She had a baby.<br/>
                    <m.span style={{opacity: s.txtOpacity4}}>
                        Which did not go unnoticed by a certain creature the queen would rather have forgotten...
                    </m.span>
                </m.p>
            </m.div>
        </>
    );
}

export default Scene10;