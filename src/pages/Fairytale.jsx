import {useEffect, useState} from "react";
import {useMotionValueEvent, useScroll} from "motion/react"
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
    const s6Repeat = f.useScene6(scrollY, s9.sceneEnd);
    const s8Repeat = f.useScene8(scrollY, s6Repeat.sceneEnd);
    const s9Repeat = f.useScene9(scrollY, s8Repeat.sceneEnd);
    const s6Repeat2 = f.useScene6(scrollY, s9Repeat.sceneEnd);
    const s8Repeat2 = f.useScene8(scrollY, s6Repeat2.sceneEnd);
    const s9Repeat2 = f.useScene9(scrollY, s8Repeat2.sceneEnd);
    const s10 = f.useScene10(scrollY, s9Repeat2.sceneEnd);
    const s11 = f.useScene11(scrollY, s10.sceneEnd);
    const s6Repeat3 = f.useScene6(scrollY, s11.sceneEnd);
    const s12 = f.useScene12(scrollY, s6Repeat3.sceneEnd);

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
                <s.Scene6 s={s6} center={center} rep={0} key={"inbetween1"}/>
                <s.Scene7 s={s7} center={center}/>
                <s.Scene8 s={s8} center={center} nightNumber={0} key={"night1"}/>
                <s.Scene9 s={s9} center={center} nightNumber={0} key={"gold1"}/>
                <s.Scene6 s={s6Repeat} center={center} rep={1} key={"inbetween2"}/>
                <s.Scene8 s={s8Repeat} center={center} nightNumber={1} key={"night2"}/>
                <s.Scene9 s={s9Repeat} center={center} nightNumber={1} key={"gold2"}/>
                <s.Scene6 s={s6Repeat2} center={center} rep={2} key={"inbetween3"}/>
                <s.Scene8 s={s8Repeat2} center={center} nightNumber={2} key={"night3"}/>
                <s.Scene9 s={s9Repeat2} center={center} nightNumber={2} key={"gold3"}/>
                <s.Scene10 s={s10} center={center}/>
                <s.Scene11 s={s11} center={center}/>
                <s.Scene12 s={s12} center={center}/>
                <s.Scene6 s={s6Repeat3} center={center} rep={3} key={"inbetween4"}/>
            </div>
            <div className={"end"} style={{ height: "100vh" }}>Ending</div>
        </>)
}

export default Fairytale