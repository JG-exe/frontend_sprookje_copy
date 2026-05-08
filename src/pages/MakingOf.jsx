import {Link} from "react-router";
import Routes from "../routes/constants/Routes.js"

function MakingOf() {
    return (
        <>
            <div className={"centerCt"}>
                <h1>Making of Rumpelstiltskin</h1>
            </div>
            <h3>Story</h3>
            <p>A miller boasts that his daughter can spin straw into gold so often that the news reaches the king’s ears. The king, greedy and curious, calls for the girl, locks her up in a tower room filled with straw and a spinning wheel, and demands she spin the straw into gold by morning or he will have her killed.</p>
                <Link to={Routes.Fairytale} className={"linkBtn"}>Experience the story</Link>
            <h3>Visuals</h3>
        </>)
}

export default MakingOf;
