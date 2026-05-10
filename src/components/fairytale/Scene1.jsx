import { motion } from "motion/react";

function Scene1({ s }) {
    const center = {
        x: "-50%",
        textAlign: "center",
        left: "50%",
    };

    return (
        <motion.div style={{ y: s.scene }} className={"parallax-lock"}>
            <motion.p className={"txt layer xxlTxt intro"}
                 style={{opacity: s.aLongTimeTxt, x: "-50%", textAlign: "center", left: "50%", top: "50vh"}}
                 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                A long time ago in a place far, far away....
            </motion.p>
            <motion.h3 className={"txt layer xxlTxt introTitle"}
                  style={{
                      ...center,
                      top: "50vh",
                      opacity: s.rumpelOpacity,
                      scale: s.rumpelScale
                  }}>
                R U M P E L S T I L T S K I N
            </motion.h3>
            <motion.div style={{
                scale: s.crawlScale,
                transformOrigin: "top center",
                perspective: "800px",
                transformStyle: "preserve-3d"
            }}>
                <motion.p className={"txt layer  xxlTxt fTonText"}
                     style={{
                         ...center,
                         y: s.txt1,
                         opacity: s.crawlOpacity,
                         rotateX: s.crawlRotateX,
                     }}>
                    It is a period of perilous bargains and deep deceit.
                    <br/>
                    A foolish miller has cast his own daughter into mortal danger through idle boasting,
                    revealing
                    that
                    FALSEHOODS spoken to impress the powerful will ultimately bring about disaster.
                    <br/>
                    Across the realm, the corrosive nature of greed is laid bare. A tyrannical monarch
                    demonstrates
                    that
                    unchecked AVARICE blinds authority, causing leaders to value the cold gleam of wealth far
                    above
                    the
                    sanctity of human life.
                    <br/>
                    Striking from the shadows, an opportunistic trickster proves that DESPERATE PACTS carry a
                    devastating price. Those who exploit the vulnerable will exact terrible tolls, threatening
                    the
                    very
                    future of the innocent and demanding payments that defy ethical behaviour.
                    <br/>
                    Yet, hope remains. The ultimate victory is won not by force, but by the power of KNOWLEDGE.
                    To
                    uncover a hidden truth, to finally name the darkness, is to shatter its binding contract and
                    restore
                    freedom to the future of the kingdom...
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default Scene1;
