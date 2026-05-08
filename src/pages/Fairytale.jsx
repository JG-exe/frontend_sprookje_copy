import {useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform} from "motion/react"
import {Link} from "react-router";
import Landing from "../components/Landing";
import Routes from "../routes/constants/Routes.js";

function Fairytale() {
    const [gone, setGone] = useState(false);
    const [autoScroll, setAutoScroll] = useState(false);
    const positionRef = useRef(null);

    const handleRestart = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setAutoScroll(false);
        setGone(false);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "fairytale");
        return () => document.documentElement.removeAttribute("data-theme")
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (e.code === 'Space') {
                e.preventDefault()
                setGone(true)
                setAutoScroll(prev => !prev)
            }
            if (e.code === 'KeyR') {
                handleRestart();
            }
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [])

    useEffect(() => {
        if (!gone || !autoScroll) {
            cancelAnimationFrame(positionRef.current);
            return
        }

        const tick = () => {
            window.scrollBy(0, 0.5);
            positionRef.current = requestAnimationFrame(tick);
        }
        positionRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(positionRef.current);
    }, [gone, autoScroll])

    useEffect(() => {
        const pause = () => setAutoScroll(false)
        window.addEventListener('wheel', pause, {passive: true})
        return () => {
            window.removeEventListener('wheel', pause)
        }
    }, [])

    const m = motion;
    const txt = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    }
    // scene 01
    const scene1End = 1980;
    const {scrollY} = useScroll()
    const scene1 = useTransform(scrollY, [0, scene1End, scene1End + 1], [0, 0, -1080]);
    const aLongTimeTxt = useTransform(scrollY, [250, 300, 500, 530], [0, 1, 1, 0]);
    const rumpel1Opacity = useTransform(scrollY, [575, 580], [0, 1]);
    const rumpel1Scale = useTransform(scrollY, [570, 900, 950], [3, .4, 0]);
    const txt1 = useTransform(scrollY, [950, 2000], [1400, -1800]);
    const crawlRotateX = useTransform(scrollY, [950, 2000], [20, 35]);
    const crawlOpacity = useTransform(scrollY, [0, 950, 1700, 1950], [0, 1, 1, 0]);
    const crawlScale = useTransform(scrollY, [950, 2000], ["100%", "10%"])
    // scene 02
    const scene2End = scene1End + 600;
    const scene2Fade = useTransform(scrollY, [scene1End, scene1End + 100, scene1End + 550, scene2End], [0, 1, 1, 0]);
    const openMiddle = useTransform(scrollY, [scene1End - 10, scene1End + 900], [0, -1100]);
    const zoomClose = useTransform(scrollY, [scene1End - 10, scene1End + 900], [1, 1.4]);
    const zoomFar = useTransform(scrollY, [scene1End - 10, scene1End + 900], [1, 1.2]);
    const zoomYAdjust = useTransform(scrollY, [scene1End - 10, scene1End + 900], [0, -40]);
    const txtOpacity2 = useTransform(scrollY, [scene1End - 10, scene1End + 200, scene1End + 300], [1, 1, 0])
    const txtOpacity3 = useTransform(scrollY, [scene1End + 290, scene1End + 350, scene1End + 500, scene1End + 550], [0, 1, 1, 0])

    return (
        <>
        <div className="fairytale-container">
            <div className={"actionBtns"}>
                <button
                    className={`btn autoscrollBtn ${autoScroll ? 'active' : ''}`}
                    onClick={() => {
                        setGone(true)
                        setAutoScroll(prev => !prev)
                    }}
                >
                    {autoScroll ? '⏸' : '▶'}
                </button>
                <button
                    className={`btn restartBtn`}
                    onClick={handleRestart}
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
            <Landing gone={gone} setGone={setGone} duration={1.2}/>
            <m.div style={{y: scene1}} className={"parallax-lock"}>
                <m.p className={"txt layer scene1 xxlTxt intro"}
                     style={{opacity: aLongTimeTxt, x: "-50%", textAlign: "center", left: "50%", top: "50vh"}}
                     initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    A long time ago in a place far, far away....
                </m.p>
                <m.h3 className={"txt layer scene1 xxlTxt introTitle"}
                      style={{...txt,
                          top: "50vh",
                          opacity: rumpel1Opacity,
                          scale: rumpel1Scale
                      }}>
                    R U M P E L S T I L T S K I N
                </m.h3>
                <m.div style={{
                    scale: crawlScale,
                    transformOrigin: "top center",
                    perspective: "800px",
                    transformStyle: "preserve-3d"
                }}>
                    <m.p className={"txt layer scene1 xxlTxt fTonText"}
                         style={{
                             ...txt,
                             y: txt1,
                             opacity: crawlOpacity,
                             rotateX: crawlRotateX,
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
            <m.div style={{opacity: scene2Fade,}} className={"parallax-lock"}>
                <m.div style={{y: zoomYAdjust}}>
                    <m.img src="./imgs/01_layer_back.png"
                           style={{scale: zoomFar}}
                           width={"100%"}
                           className={"backL layer scene1"}
                    />
                    <m.div style={{scale: zoomClose}} className={"parallax-lock"}>
                        <m.img src="./imgs/01_layer_mid_left.png"
                               width={"100%"}
                               className={"middleL layer scene1"}
                               style={{left: openMiddle}}
                        />
                        <m.img src="./imgs/01_layer_mid_right.png"
                               width={"100%"}
                               className={"middleL layer scene1"}
                               style={{right: openMiddle}}
                        />
                    </m.div>
                </m.div>
                <m.p className={"txt parallax-lock"} style={{...txt, top: "90vh", opacity: txtOpacity2}}>There once was a kingdom ruled by a really rich king.</m.p>
                <m.p className={"txt parallax-lock"} style={{...txt, top: "90vh", opacity: txtOpacity3}}>And as we all know, no-one gets that rich by being good.</m.p>
            </m.div>
                    {/*<m.img src="./imgs/01_poor_miller_side.png" style={{scale: 0.04, y: "-50%", x: "-50%", left: "50%", top: "88vh"}} className={"parallax-lock topL layer scene1"}*/}
                    {/*/>*/}
        </div>
        <div className={"end"}>Ending</div>
        {/* TODO: add ending screen */}
    </>)
}

export default Fairytale