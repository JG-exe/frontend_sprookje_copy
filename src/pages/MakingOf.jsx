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
                        A miller boasts that his daughter can spin straw into gold so often that the news reaches the
                        king’s ears.
                    </p>
                    <p>
                        The king, greedy and curious, calls for the girl, locks her up in a tower room filled with straw
                        and a spinning wheel, and demands she spin the straw into gold by morning or he will have her
                        killed. <br/>
                        You can watch a version of the full story in the video to the right and my version by clicking
                        the link right below.
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
            <div className={"centerCt columns"}>
                <h3>Visuals</h3>
                <p>Using a sticky parallax architecture, built with motion in Vite/React and CSS, this project
                    combines dark folklore with vertical scroll-driven animation to retell Rumpelstiltskin in a
                    modern way. The website makes use of useScroll and useTransform as main drivers to lock
                    scenes in place.</p>
                <p>CSS layering creates depth and an immersive, almost claustrophobic tower environment where
                    every scene breathes. Interactive elements bring the story to a satisfying closure. This
                    modular React-based architecture transforms the classic cautionary tale into a
                    high-performance, atmospheric digital experience.</p>
                <p>Unfortunately, due to time and resource constraints, all images in this project are AI generated and
                    edited in photoshop after.
                </p>
            </div>
        </>
    )
}

export default MakingOf;
