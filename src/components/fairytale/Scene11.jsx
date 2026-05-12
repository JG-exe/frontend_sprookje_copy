import {motion} from "motion/react";
import Rumpel from "./components/Rumpel.jsx";

function Scene11({s, center}) {

    const m = motion;

    return (
        <>
            <m.div style={{opacity: s.sceneFade, pointerEvents: "auto"}} className={"parallax-lock"}>
                <m.img src="./imgs/04_grand_hall.png" className={"backL layer parallax-lock"}
                       style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                <m.div className={"middleL parallax-lock"}
                       style={{...center, width: "250px", height: "400px", top: "38vh", left: "68vw"}}>
                    <m.img src="./imgs/04_queen_and_baby.png" width="100%" height="100%"
                           className={"layer parallax-lock"} style={{opacity: 1}}/>
                </m.div>
                    <Rumpel center={center} showRumpel={true} className={"mirror"} scale={-1} top={"60vh"} left={"40vw"} opacity={s.rumpelOpacity}/>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity1}}>
                    Not too long after the baby was born, the cunning imp showed up at the palace, demanding she gives him the child.<br/>
                    <m.span style={{opacity: s.txtOpacity2}}>The queen refuses and tries to offer him all the riches of the kingdom.</m.span><br/>
                    <m.span style={{opacity: s.txtOpacity3}}>
                        But the imp keeps refusing. He wants the child.
                    </m.span>
                </m.p>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity4}}>
                    But he is willing to offer her a chance.<br/>
                    If she can guess his name within three days, he will leave the child with her.<br/>
                    <m.span style={{opacity: s.txtOpacity5}}>And with that, he disappears again.</m.span>
                </m.p>
            </m.div>
        </>
    );
}

export default Scene11;