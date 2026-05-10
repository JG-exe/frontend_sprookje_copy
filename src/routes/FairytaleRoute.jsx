import {lazy, Suspense} from "react";
import "../css/fairytale.css"
import Curtains from "../pages/Curtains.jsx";

const Fairytale = lazy(() => import("../pages/Fairytale.jsx"));
export const FairytaleRoute = () => (
<Suspense fallback={<>
<Curtains/>
</>}>
    <Fairytale/>
</Suspense>);