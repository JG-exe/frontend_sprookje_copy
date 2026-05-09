import {createBrowserRouter} from "react-router";
import RootLayout from "./layouts/RootLayout";
import BareLayout from "./layouts/BareLayout";
import Home from "./pages/Home";
import All from "./pages/All";
import MakingOf from "./pages/MakingOf";
import {FairytaleRoute} from "./routes/FairytaleRoute.jsx";
import Routes from "./routes/constants/Routes.js";
import Curtains from "./pages/Curtains.jsx";


const router = createBrowserRouter([
        {
            element: <RootLayout/>,
            children: [
                {path: Routes.Home, element: <Home/>},
                {path: Routes.All, element: <All/>},
                {path: Routes.MakingOf, element: <MakingOf/>},
            ],
        },
        {
            element: <BareLayout/>,
            children: [
                {
                    path: Routes.Fairytale, element: <FairytaleRoute/>
                },
            ],
        },
    ]
    , {basename: import.meta.env.BASE_URL}
);

export default router;