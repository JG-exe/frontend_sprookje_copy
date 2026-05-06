import {Link} from "react-router";

function MakingOf() {
    return (
        <>
            <div className={"centerCt"}>
                <h1>Making of Rumpelstiltskin</h1>
                <Link to={"/fairytale"} className={"linkBtn"}>go to story</Link>
            </div>
        </>)
}

export default MakingOf;
