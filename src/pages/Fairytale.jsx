import {useEffect} from "react";
import {useScroll} from "motion/react"
import {Link} from "react-router";
import Routes from "../routes/constants/Routes.js";
import * as f from "../hooks/fairytale"
import * as s from "../components/fairytale";

function Fairytale() {
    const playback = f.usePlayback();
    f.useAutoScroll(playback.autoScroll, playback.gone, playback.setAutoScroll);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "fairytale");
        return () => document.documentElement.removeAttribute("data-theme")
    }, []);

    const center = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    };

    const {scrollY} = useScroll()
    const s1 = f.useScene1(scrollY);
    const s2 = f.useScene2(scrollY, s1.sceneEnd);
    const s3 = f.useScene3(scrollY, s2.sceneEnd);
    const s4 = f.useScene4(scrollY, s3.sceneEnd);
    const s5 = f.useScene5(scrollY, s4.sceneEnd);
    const s6 = f.useScene6(scrollY, s5.sceneEnd);
    const s7 = f.useScene7(scrollY, s6.sceneEnd);
    const s8 = f.useScene8(scrollY, s7.sceneEnd);
    const s9 = f.useScene9(scrollY, s8.sceneEnd);

    const introAudioRef = f.useFairytaleAudio(playback.isMuted, s1.sceneEnd, scrollY);
    return (
        <>
            <audio ref={introAudioRef} src="./static/sounds/Intro.mp3" loop preload="auto"/>
            <div className="fairytale-container">
                <div className={"actionBtns"}>
                    <button
                        className={`btn autoscrollBtn ${playback.autoScroll ? 'active' : ''}`}
                        onClick={playback.toggleAutoScroll}>
                        {playback.autoScroll ? '⏸' : '▶'}
                    </button>
                    <button
                        className={`btn restartBtn`}
                        onClick={playback.handleRestart}>
                        R
                    </button>
                    <button
                        className={`btn muteBtn`}
                        onClick={playback.toggleMute}>
                        <span>
                        {playback.isMuted ? "/" : ""}
                        </span>
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
                <s.Landing gone={playback.gone} setGone={playback.setGone} duration={1.2} style={{zIndex: 20}}/>
                <s.Scene1 s={s1} center={center}/>
                <s.Scene2 s={s2} center={center}/>
                <s.Scene3 s={s3} center={center}/>
                <s.Scene4 s={s4} center={center}/>
                <s.Scene5 s={s5} center={center}/>
                <s.Scene6 s={s6} center={center}/>
                <s.Scene7 s={s7} center={center}/>
                <s.Scene8 s={s8} center={center}/>
                <s.Scene9 s={s9} center={center}/>
            </div>
            <div className={"end"}>Ending</div>
            {/* TODO: add ending screen */}
        </>)
}

export default Fairytale