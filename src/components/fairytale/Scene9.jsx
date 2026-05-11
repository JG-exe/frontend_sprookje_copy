import {motion} from "motion/react";

function Scene9({s, center}) {
    const m = motion;
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
                    <m.img src="./imgs/02_background_room.png" className={"backL layer parallax-lock"}
                           style={{width: "100vw", height: "100vh", ...center, opacity: 1}}/>
                    <m.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                        ...center,
                        height: "450px",
                        width: "auto",
                        top: "32vh",
                        x: "-50%",
                        left: "40%",
                        opacity: 1
                    }}/>
            </m.div>
        </>
    );
}

export default Scene9;