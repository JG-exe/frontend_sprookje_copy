import "../css/fairytale.css"
function Curtains() {
    return (
        <div data-theme="fairytale">
            <div className="curtain-left" style={{width: "52vw", height: "100vh"}}/>
            <div className="curtain-right" style={{width: "51vw", height: "100vh"}}/>
            <div className={`title`} style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "10"}}>
                <h2>Loading...</h2>
                <h1>Rumpelstiltskin</h1>
            </div>
        </div>
    )
}
export default Curtains