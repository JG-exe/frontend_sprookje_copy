import "../css/fairytale.css"
import {useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform} from "motion/react"
import {Link} from "react-router";
import Landing from "../components/Landing";

function Fairytale() {
    const [gone, setGone] = useState(false);
    const [autoScroll, setAutoScroll] = useState(false);
    const positionRef = useRef(null);

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
            window.scrollBy(0, 0.6);
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

    const duration = 1.2;
    const {scrollY} = useScroll()
    const stick = useTransform(scrollY, [0, 500, 501], [0, 0, -1080]);
    return (
        <>
            <button
                className={`btn autoscrollBtn ${autoScroll ? 'active' : ''}`}
                onClick={() => {
                    setGone(true)
                    setAutoScroll(prev => !prev)
                }}
            >
                {autoScroll ? '⏸' : '▶'}
            </button>
            <Link to="/" className={"btn homeBtn"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none"
                     stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="0,40 40,5 80,40"/>
                    <polyline points="12,40 12,75 68,75 68,40"/>
                    <rect x="30" y="52" width="20" height="23" rx="2"/>
                </svg>
            </Link>
            <Landing gone={gone} setGone={setGone} duration={duration}/>
            <motion.div style={{y: stick}} className={"parallax-lock"}>
                <img src="./imgs/01_layer_back.png" width={"100%"} className={"backLayer scene1"}/>
                <img src="./imgs/01_layer_mid.png" width={"100%"} className={"middleLayer scene1"}/>
            </motion.div>
            <img src="./imgs/01_layer_back.png" width={"100%"} className={"backLayer scene2"}/>
        </>
    )
}

export default Fairytale