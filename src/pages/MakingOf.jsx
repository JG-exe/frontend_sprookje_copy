import {Link} from "react-router-dom";
import Routes from "../routes/constants/Routes.js"

function MakingOf() {
    return (
        <>
            <div className={"centerCt"}>
                <h1>Making of Rumpelstiltskin</h1>
            </div>
            <div className="gridCtx50">
                <div className="txtColumn">
                    <h3>Story</h3>
                    <p>
                        A miller boasts that his daughter can spin straw into gold so often that the news reaches the king’s ears.
                    </p>
                    <p>
                        The king, greedy and curious, calls for the girl, locks her up in a tower room filled with straw and a spinning wheel, and demands she spin the straw into gold by morning or he will have her killed. <br/>
                        You can watch a version of the full story in the video to the right and my version by clicking the link right below.
                    </p><br/>
                    <Link to={Routes.Fairytale} className={"linkBtn"}>Experience the story</Link>
                </div>
                <div className="iframeColumn">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/D6IKvMUQptk?si=elJ3ZJ7LXXg90_Pr"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div className={"centerCt"}>
                <h3>Visuals</h3>
            </div>
        </>
    )
}

export default MakingOf;
