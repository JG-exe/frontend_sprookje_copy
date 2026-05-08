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
    const end1 = 1100;
    const {scrollY} = useScroll()
    const scene1 = useTransform(scrollY, [0, end1, end1 + 1], [0, 0, -1080]);
    const aLongTimeTxt = useTransform(scrollY, [250, 300, 500, 530], [0, 1, 1, 0])
    const txt2 = useTransform(scrollY, [400, 1100], [1100, -50])
    const scene2Fade = useTransform(scrollY, [end1, end1 + 100, end1 + 900, end1 + 1000], [0, 1, 1, 0]);
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
                    <m.p className={"txt layer scene1 xxlTxt intro"} style={{opacity: aLongTimeTxt, x: "-50%", textAlign: "center", left: "50%", top: "50vh"}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        A long time ago in a place far, far away....
                    </m.p>
                    <m.h3 className={"txt layer scene1 xxlTxt introTitle"} style={{y: txt2, x: "-50%", textAlign: "center", left: "50%"}}>
                        R U M P E L S T I L T S K I N
                    </m.h3>
                </m.div>
                <m.div style={{opacity: scene2Fade}} className={"parallax-lock"}>
                    <img src="./imgs/01_layer_back.png" width={"100%"} className={"backL layer scene1"}/>
                    <m.img src="./imgs/01_layer_mid_left.png" width={"100%"} className={"middleL layer scene1"}/>
                    <m.img src="./imgs/01_layer_mid_right.png" width={"100%"} className={"middleL layer scene1"}/>
                </m.div>
            </div>
            <div className={"end"}>Ending</div>
            {/* TODO: add ending screen */}
        </>
    )
}

export default Fairytale