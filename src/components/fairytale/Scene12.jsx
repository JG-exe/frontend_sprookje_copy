import {motion} from "motion/react";

function Scene12({s, center}) {
    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade, zIndex: 2}}>
                <m.div style={{scale: s.zoomTrees, top: s.moveTreesUp}} className={"parallax-lock"}>
                    <m.img src="./imgs/01_layer_mid_left.png"
                                width={"100%"}
                                className={"middleL layer"}
                                style={{left: s.openMiddle}}/>
                    <m.img src="./imgs/01_layer_mid_right.png"
                                width={"100%"}
                                className={"middleL layer"}
                                style={{right: s.openMiddle}}/>
                </m.div>
                <m.img src="./imgs/04_rumpelstiltskin.png" className={"rumpelImg dancing"} style={{...center, width: "auto", height: "250px", top: "50vh", x: "30px"}}/>
                <m.img src="./imgs/04_campfire.png" style={{...center, width: "800px", height: "auto", top: "40vh", left: "55vw", zIndex: "revert"}} className={"parallax-lock"}/>
                <m.p className={"parallax-lock txt"} style={{...center, top: "45vh", opacity: s.txtOpacity1}}>
                </m.p>
            </m.div>
        </>
    );
}

export default Scene12;