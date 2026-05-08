import {lazy, Suspense} from "react";
import "../css/fairytale.css"

const Fairytale = lazy(() => import("../pages/Fairytale.jsx"));
export const FairytaleRoute = () => (
<Suspense fallback={<>
    <div className="curtain-left" style={{width: "52%"}}/>
    <div className="curtain-right" style={{width: "51%"}}/>
</>}>
    <Fairytale/>
</Suspense>);