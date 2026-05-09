import {useEffect, useState} from "react";
import {motion, useScroll} from "motion/react"
import {Link} from "react-router";
import Landing from "../components/Landing";
import Routes from "../routes/constants/Routes.js";
import {useScene1} from "../hooks/useScene1.js";
import {useScene2} from "../hooks/useScene2.js";
import {useScene3} from "../hooks/useScene3.js";
import {useScene4} from "../hooks/useScene4.js";
import {usePlayback} from "../hooks/usePlayback.js";
import {useAutoScroll} from "../hooks/useAutoScroll.js";

function Fairytale() {
    const [millerHover, setMillerHover] = useState(false)
    const playback = usePlayback();
    useAutoScroll(playback.autoScroll, playback.gone, playback.setAutoScroll);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "fairytale");
        return () => document.documentElement.removeAttribute("data-theme")
    }, []);

    // eslint-disable-next-line no-unused-vars
    const m = motion;
    const center = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    }
    const {scrollY} = useScroll()
    const scene1 = useScene1(scrollY);
    const scene2 = useScene2(scrollY, scene1.sceneEnd);
    const scene3 = useScene3(scrollY, scene2.sceneEnd);
    const scene4 = useScene4(scrollY, scene3.sceneEnd);
    return (
        <>
            <div className="fairytale-container">
                <div className={"actionBtns"}>
                    <button
                        className={`btn autoscrollBtn ${playback.autoScroll ? 'active' : ''}`}
                        onClick={playback.toggleAutoScroll}
                    >
                        {playback.autoScroll ? '⏸' : '▶'}
                    </button>
                    <button
                        className={`btn restartBtn`}
                        onClick={playback.handleRestart}
                    >
                        R
                    </button>
                </div>
                <Link to={Routes.Home} className={"btn homeBtn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none"
                         stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="0,40 40,5 80,40"/>
                        <polyline points="12,40 12,75 68,75 68,40"/>
                        <rect x="30" y="52" width="20" height="23" rx="2"/>
                    </svg>
                </Link>
                <Landing gone={playback.gone} setGone={playback.setGone} duration={1.2}/>
                <m.div style={{y: scene1.scene}} className={"parallax-lock"}>
                    <m.p className={"txt layer xxlTxt intro"}
                         style={{opacity: scene1.aLongTimeTxt, x: "-50%", textAlign: "center", left: "50%", top: "50vh"}}
                         initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        A long time ago in a place far, far away....
                    </m.p>
                    <m.h3 className={"txt layer xxlTxt introTitle"}
                          style={{
                              ...center,
                              top: "50vh",
                              opacity: scene1.rumpelOpacity,
                              scale: scene1.rumpelScale
                          }}>
                        R U M P E L S T I L T S K I N
                    </m.h3>
                    <m.div style={{
                        scale: scene1.crawlScale,
                        transformOrigin: "top center",
                        perspective: "800px",
                        transformStyle: "preserve-3d"
                    }}>
                        <m.p className={"txt layer  xxlTxt fTonText"}
                             style={{
                                 ...center,
                                 y: scene1.txt1,
                                 opacity: scene1.crawlOpacity,
                                 rotateX: scene1.crawlRotateX,
                             }}>
                            It is a period of perilous bargains and deep deceit.
                            <br/>
                            A foolish miller has cast his own daughter into mortal danger through idle boasting,
                            revealing
                            that
                            FALSEHOODS spoken to impress the powerful will ultimately bring about disaster.
                            <br/>
                            Across the realm, the corrosive nature of greed is laid bare. A tyrannical monarch
                            demonstrates
                            that
                            unchecked AVARICE blinds authority, causing leaders to value the cold gleam of wealth far
                            above
                            the
                            sanctity of human life.
                            <br/>
                            Striking from the shadows, an opportunistic trickster proves that DESPERATE PACTS carry a
                            devastating price. Those who exploit the vulnerable will exact terrible tolls, threatening
                            the
                            very
                            future of the innocent and demanding payments that defy ethical behaviour.
                            <br/>
                            Yet, hope remains. The ultimate victory is won not by force, but by the power of KNOWLEDGE.
                            To
                            uncover a hidden truth, to finally name the darkness, is to shatter its binding contract and
                            restore
                            freedom to the future of the kingdom...
                        </m.p>
                    </m.div>
                </m.div>
                <m.div style={{opacity: scene2.sceneFade,}} className={"parallax-lock"}>
                    <m.div style={{y: scene2.zoomYAdjust}}>
                        <m.img src="./imgs/01_layer_back.png"
                               style={{scale: scene2.zoomFar}}
                               width={"100%"}
                               className={"backL layer "}
                        />
                        <m.div style={{scale: scene2.zoomClose}} className={"parallax-lock"}>
                            <m.img src="./imgs/01_layer_mid_left.png"
                                   width={"100%"}
                                   className={"middleL layer "}
                                   style={{left: scene2.openMiddle}}
                            />
                            <m.img src="./imgs/01_layer_mid_right.png"
                                   width={"100%"}
                                   className={"middleL layer "}
                                   style={{right: scene2.openMiddle}}
                            />
                        </m.div>
                    </m.div>
                    <m.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: scene2.txtOpacity1}}>There
                        once was a kingdom ruled by a really rich king.
                    </m.p>
                    <m.p className={"txt parallax-lock"} style={{...center, top: "90vh", opacity: scene2.txtOpacity2}}>And as
                        we all know, no-one gets that rich by being good.
                    </m.p>
                </m.div>
                <m.p className={"parallax-lock txt"} style={{opacity: scene3.txtOpacity1, ...center, top: "60vh"}}>
                    Meet our unwilling and foolish catalyst.
                </m.p>
                <m.div className={"parallax-lock"} style={{opacity: scene3.sceneFade}}>
                    <m.img src="./imgs/01_mill.png" width={"72%"} className={"backL layer "}
                           style={{...center, top: "10px"}}/>
                    <m.img src="./imgs/01_poor_miller_side.png"
                           style={{scale: 0.06, y: "-50%", x: "-50%", left: "41%", top: "83vh"}}
                           className={"parallax-lock topL layer"}
                    />
                    <m.p className={"txt parallax-lock"} style={{...center, top: "90vh"}}>
                        <m.span style={{opacity: scene3.txtOpacity2}}>The</m.span>
                        &nbsp;
                        <m.span style={{opacity: scene3.txtOpacity3}}>poor</m.span>
                        &nbsp;
                        <m.span style={{opacity: scene3.txtOpacity4}}>miller</m.span>
                        <br/>
                        <m.span style={{opacity: scene3.txtOpacity5}}>If only he was just that...</m.span>
                    </m.p>
                </m.div>
                <m.div className={"millerScene"} style={{opacity: scene4.sceneFade, top: "0"}}>
                    <m.div className={"miller parallax-lock"} onHoverStart={() => setMillerHover(true)} onHoverEnd={() => setMillerHover(false)}>
                        {millerHover && scene4.txtOpacity4.get() > 0 && (
                            <m.div
                                className={"speech-bubble"}
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.2}}
                            >
                                <img src="./imgs/01_poor_girl.png" height={"100px"}/>
                                <span className={"xxlTxt"}>=</span>
                                <img src="./imgs/02_gold_pile.png" height={"100px"}/>
                            </m.div>
                        )}
                        <m.img src="./imgs/01_poor_miller_side_arm.png" className="arm"></m.img>
                        <m.img src="./imgs/01_poor_miller_side_no_arm.png" className="body"></m.img>
                    </m.div>
                    <m.div className={"parallax-lock"}>
                        <m.p
                            className={"txt txtLeft parallax-lock"}
                            style={{...center, top: "30vh", left: "30%", opacity: scene4.txtOpacity1}}
                        >
                            <span>But no...</span>
                            <br/>
                            <m.span style={{opacity: scene4.txtOpacity2}}>He LOVED boasting about things.</m.span>
                            <br/>
                            <m.span style={{opacity: scene4.txtOpacity3}}>EVEN if those things weren't always true.</m.span>
                            <br/>
                            <m.span style={{opacity: scene4.txtOpacity4}}>Like about his daughter for example.</m.span>
                        </m.p>
                        <m.img src="./imgs/01_poor_girl.png" className={"middleL parallax-lock"} style={{
                            ...center,
                            scale: 0.06,
                            top: "-192%",
                            x: "-45%",
                            y: "0",
                            opacity: scene4.txtOpacity4
                        }}/>
                        <m.p className={"txt parallax-lock"} style={{...center, top: "85vh"}}>
                            <m.span style={{ opacity: scene4.txtOpacity5}} >He would tell everyone who wanted to hear how his daughter could turn hay into gold by spinning it.</m.span><br/>
                            <m.span style={{opacity: scene4.txtOpacity6}}>And everyone who didn't want to hear it, but happened to cross him...<br/>They got to hear it too. Try to pass him without making him mention it, I dare you!</m.span>
                        </m.p>
                    </m.div>
                </m.div>
            </div>
            <div className={"end"}>Ending</div>
            {/* TODO: add ending screen */}
        </>)
}

export default Fairytale