import "../css/fairytale.css"
import {useEffect, useRef, useState} from "react";
import {motion, useScroll, useTransform} from "motion/react"
import {Link} from "react-router";

function Fairytale() {
    const [gone, setGone] = useState(false);
    const [autoScroll, setAutoScroll] = useState(false);
    const positionRef = useRef(null);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "fairytale");
        return () => document.documentElement.removeAttribute("data-theme")
    }, []);

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.deltaY > 0) {
                setGone(true);
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e) => {
            const touchEndY = e.touches[0].clientY;
            if (touchStartY > touchEndY + 5) {
                setGone(true);
            }
        };

        if (!gone) {
            window.addEventListener('wheel', handleWheel, { passive: true });
            window.addEventListener('touchstart', handleTouchStart, { passive: true });
            window.addEventListener('touchmove', handleTouchMove, { passive: true });
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [gone]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setGone(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
            cancelAnimationFrame(positionRef.current)
            return
        }

        const tick = () => {
            window.scrollBy(0, 0.6)
            positionRef.current = requestAnimationFrame(tick)
        }

        positionRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(positionRef.current)
    }, [gone, autoScroll])

    useEffect(() => {
        const pause = () => setAutoScroll(false)
        window.addEventListener('wheel', pause, {passive: true})
        window.addEventListener('touchmove', pause, {passive: true})
        return () => {
            window.removeEventListener('wheel', pause)
            window.removeEventListener('touchmove', pause)
        }
    }, [])

    const duration = 1.2;
    const offsetY = useRef(window.visualViewport.height / 2);
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="0,40 40,5 80,40"/>
                    <polyline points="12,40 12,75 68,75 68,40"/>
                    <rect x="30" y="52" width="20" height="23" rx="2"/>
                </svg>
            </Link>
            <motion.div
                className="curtain-left"
                animate={gone ? {y: "-10%", x: '-75%', width: "5%", skewX: [0, 5, 0]} : {
                    y: "0%",
                    x: 0,
                    width: "52%",
                    skewY: [0, 4, 0]
                }}
                transition={{
                    duration: duration, ease: [0.76, 0, 0.24, 1], x: {delay: .2, duration: duration}, skewY: {
                        duration: duration,
                        times: [0, duration / 3, 1],
                        ease: 'easeInOut'
                    }
                }}
            />
            <motion.div
                className="curtain-right"
                animate={gone ? {y: "-10%", x: '80%', width: "5%", skewX: [0, -3, 0]} : {
                    y: "0%",
                    x: 0,
                    width: "51%",
                    skewY: [0, -4, 0]
                }}
                transition={{
                    duration: duration, ease: [0.76, 0, 0.24, 1], x: {delay: .2, duration: .7}, skewY: {
                        duration: duration,
                        times: [0, 0.4, 1],
                        ease: 'easeInOut'
                    }
                }}
            />
            <motion.div
                className={"landing"}
                animate={gone ? {y: -offsetY, opacity: 0} : {y: 0, opacity: 1}}
                transition={gone ? {duration: 0.5, ease: "easeInOut"} : {
                    delay: duration, duration: 0.5, ease: "easeInOut"
                }}
            >
                <div className={"title"}>
                    <h2>Once Upon A Time...</h2>
                    <h1>Rumpelstiltskin</h1>
                </div>
            </motion.div>
            <motion.div style={{y: stick}} className={"parallax-lock"}>
                <img src="/imgs/01_layer_back.png" width={"100%"} className={"backLayer scene1"}/>
                <img src="/imgs/01_layer_mid.png" width={"100%"} className={"middleLayer scene1"}/>
            </motion.div>
            <img src="/imgs/01_layer_back.png" width={"100%"} className={"backLayer scene2"}/>
        </>
    )
}

export default Fairytale