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
]

function Scene6({s, center, rep}) {
    const m = motion
    return (
        <>
            <m.div className={"parallax-lock"} style={{opacity: s.sceneFade}}>
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