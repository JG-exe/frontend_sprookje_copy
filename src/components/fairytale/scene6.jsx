import {motion} from "motion/react";

const storyTxt = [
    {
        top: "The king demanded the girl show up at the palace.",
        bottom: "The daughter, scared to refuse, showed up soon after."
    },
    {
        top: "The king locked the girl in a bigger room, filled with more straw than the girl had ever seen before.",
        bottom: "'If this isn't all turned into gold by the first light, I will have your head', the king told her."
    },
    {
        top: "The king locked the girl in an even bigger room, filled with more straw than the girl could ever imagine.",
        bottom: "'My dear girl', the king said, 'if you can turn all of this into gold by the next morning, I will make you queen."
    },
    {
      top:"The queen tries to guess his name over and over again. She tried every name she could come up with, every name in the country and every name her servants offered her.",
      bottom:"But to no avail. Until, on the last night before her child would be taken, one of her servants spots something peculiar."
    },
]

function Scene6({s, center, rep}) {
    const m = motion
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade, pointerEvents: "none"}}>
                <m.p className={"parallax-lock txt"} style={{...center, top: "50vh"}}>
                    {storyTxt[rep].top}<br/>
                    <m.span style={{opacity: s.txtOpacity1}}>
                        {storyTxt[rep].bottom}
                    </m.span>
                </m.p>
            </m.div>
        </>)
}

export default Scene6