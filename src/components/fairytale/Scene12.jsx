import {motion} from "motion/react";

function Scene12({s, center}) {

    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade, zIndex: 2}}>
                <m.div style={{scale: s.zoomTrees, top: s.moveTreesUp, pointerEvents: "none"}}
                       className={"parallax-lock"}>
                    <m.img src="./imgs/01_layer_mid_left.png"
                           width={"100%"}
                           className={"middleL layer"}
                           style={{left: s.openMiddle}}/>
                    <m.img src="./imgs/01_layer_mid_right.png"
                           width={"100%"}
                           className={"middleL layer"}
                           style={{right: s.openMiddle}}/>
                </m.div>
                <m.div className={"campfire parallax-lock"} style={{...center, pointerEvents: "none", zIndex: "revert", width:"800px", height:"440px", left: "55vw", top: "40vh"}}>
                    <m.img src="./imgs/04_rumpelstiltskin.png" className={"rumpelImg dancing"}
                           style={{
                               ...center,
                               width: "auto",
                               height: "250px",
                               top: "80px",
                               left: "300px",
                               pointerEvents: "none",
                               position: "absolute"
                           }}/>
                    <m.img src="./imgs/04_campfire.png"
                           style={{
                               ...center,
                               width: "800px",
                               height: "auto",
                               zIndex: "revert",
                               position: "absolute"
                           }}/>
                </m.div>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity1}}>
                    What is that?<br/>
                    <m.span style={{opacity: s.txtOpacity2}}>A weird creature in the woods, singing next to a campfire?
                    </m.span>
                </m.p>
                <m.span style={{opacity: s.txtOpacity3, top: "30vh", left: "20vw", rotate: "10deg", x: s.moveTxtNeg}}
                        className={"parallax-lock txt"}>
                    Today I'll bake
                </m.span>
                <m.span style={{opacity: s.txtOpacity4, top: "28vh", left: "26vw", rotate: "-10deg", y: s.moveTxtNeg}}
                        className={"parallax-lock txt"}>
                    tomorrow I'll brew,
                </m.span>
                <m.span style={{opacity: s.txtOpacity5, top: "34vh", left: "32vw", rotate: "7deg", x: s.moveTxtPos}}
                        className={"parallax-lock txt"}>
                    Then I'll fetch the queen's new child,
                </m.span>
                <m.span style={{opacity: s.txtOpacity6, top: "30vh", left: "56vw", rotate: "-12deg", y: s.moveTxtPos}}
                        className={"parallax-lock txt"}>
                    It is good that no one knows,
                </m.span>
                <m.span style={{opacity: s.txtOpacity7, top: "36vh", left: "63vw", rotate: "15deg", y: s.moveTxtNeg}}
                        className={"parallax-lock txt"}>
                    that Rumpelstiltskin is my name.
                </m.span>
                <m.p className={"parallax-lock txt"} style={{...center, top: "90vh", opacity: s.txtOpacity8}}>
                    That has to be his name!<br/>
                    Quickly, to the queen with this news!
                </m.p>
            </m.div>
        </>
    );
}

export default Scene12;