import {Link} from "react-router";
import Routes from "../routes/constants/Routes.js"

function MakingOf() {
    return (
        <>
            <div className={"centerCt"}>
                <h1>Making of Rumpelstiltskin</h1>
                <Link to={Routes.Fairytale} className={"linkBtn"}>go to story</Link>
            </div>
        </>)
}

export default MakingOf;
