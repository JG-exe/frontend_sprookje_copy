import {useEffect} from "react";
import {useScroll} from "motion/react"
import {Link} from "react-router";
import Landing from "../components/fairytale/Landing.jsx";
import Routes from "../routes/constants/Routes.js";
import * as f from "../hooks/fairytale"
import Scene1 from "../components/fairytale/Scene1.jsx";
import Scene2 from "../components/fairytale/Scene2.jsx";
import Scene3 from "../components/fairytale/Scene3.jsx";
import Scene4 from "../components/fairytale/Scene4.jsx";
import Scene5 from "../components/fairytale/Scene5.jsx";
import Scene6 from "../components/fairytale/scene6.jsx";

function Fairytale() {
    const playback = f.usePlayback();
    f.useAutoScroll(playback.autoScroll, playback.gone, playback.setAutoScroll);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "fairytale");
        return () => document.documentElement.removeAttribute("data-theme")
    }, []);

    const {scrollY} = useScroll()
    const s1 = f.useScene1(scrollY);
    const s2 = f.useScene2(scrollY, s1.sceneEnd);
    const s3 = f.useScene3(scrollY, s2.sceneEnd);
    const s4 = f.useScene4(scrollY, s3.sceneEnd);
    const s5 = f.useScene5(scrollY, s4.sceneEnd);
    const s6 = f.useScene6(scrollY, s5.sceneEnd);

    return (
        <>
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
                </div>
                <Link to={Routes.Home} className={"btn homeBtn"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none"
                         stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="0,40 40,5 80,40"/>
                        <polyline points="12,40 12,75 68,75 68,40"/>
                        <rect x="30" y="52" width="20" height="23" rx="2"/>
                    </svg>
                </Link>
                <Landing gone={playback.gone} setGone={playback.setGone} duration={1.2} style={{zIndex: 20}}/>
                <Scene1 s={s1}/>
                <Scene2 s={s2}/>
                <Scene3 s={s3}/>
                <Scene4 s={s4}/>
                <Scene5 s={s5}/>
                <Scene6 s={s6}/>
            </div>
            <div className={"end"}>Ending</div>
            {/* TODO: add ending screen */}
        </>)
}

export default Fairytale