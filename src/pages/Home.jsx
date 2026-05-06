
import {Link} from "react-router";
import RecommendedBooks from "../components/RecommendedBooks.jsx";

function Home() {
    return (<>
        <div className={"centerCt home"}>
            <h2>In the spotlight</h2>
            <div className={"show"}>
                <RecommendedBooks/>
            </div>
        </div>
        <div className={"centerCt onceUponATime"}>
            <div className={"welcomeTxt"}>
                <h1>Once upon a time...</h1>
                <div className={"divider"}><span>✦</span></div>
                <p>
                    in a world built from pixels and imagination, the students of Multimedia & Creative Technology
                    wrote their own modern fairy tales.<br/>
                    Not the classical kind. No princes on horseback, no fire-breathing dragons. These are stories
                    that land: full of emotion, fantasy, and meaning.<br/>
                    This collection is the result of weeks of intense creative work. From a first electric idea, to
                    sketches, storyboards, and digital illustrations — all the way to animations that move, or
                    interactive experiences that carry you into another universe entirely.<br/>
                    Every fairy tale here is its own world. Sometimes funny, sometimes tender. Sometimes familiar,
                    sometimes wonderfully strange. But always made with care, craft, and an enormous dose of
                    creativity.<br/>
                    Welcome to a place where technology and imagination converge.</p>
            </div>
            <br/>
            <Link to="/All" className={"linkBtn bigTopM"}>ALL STORIES</Link>
        </div>
    </>);
}

export default Home;
