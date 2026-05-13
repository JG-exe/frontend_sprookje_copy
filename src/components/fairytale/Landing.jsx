import { motion } from "motion/react";
import {useEffect, useRef} from "react";

function Landing({ gone, setGone, duration }) {
    const offsetY = useRef(window.visualViewport.height / 2);

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.deltaY > 0) {
                setGone(true);
            }
        };

        if (!gone) {
            window.addEventListener('wheel', handleWheel, { passive: true });
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [gone, setGone]);

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
    }, [setGone]);

    return (
        <>
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
                <div className={`title ${gone ? 'hidden' : ''}`} style={{pointerEvents: "none"}}>
                    <h2>Once Upon A Time...</h2>
                    <h1>Rumpelstiltskin</h1>
                    <p>(best experienced with sound on and in fullscreen(f11))</p>
                </div>
            </motion.div>
        </>
    );
}

export default Landing;
