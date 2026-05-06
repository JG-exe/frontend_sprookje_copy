import {lazy, Suspense} from "react";

const Fairytale = lazy(() => import("../pages/Fairytale.jsx"));
export const FairytaleRoute = () => (
<Suspense fallback={<div>Loading...</div>}>
    <Fairytale/>
</Suspense>);