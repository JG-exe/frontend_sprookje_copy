import {createBrowserRouter} from "react-router";
import RootLayout from "./layouts/RootLayout";
import BareLayout from "./layouts/BareLayout";
import * as p from "./pages";
import {FairytaleRoute} from "./routes/FairytaleRoute.jsx";
import Routes from "./routes/constants/Routes.js";


const router = createBrowserRouter([
        {
            element: <RootLayout/>,
            children: [
                {path: Routes.Home, element: <p.Home/>},
                {path: Routes.All, element: <p.All/>},
                {path: Routes.MakingOf, element: <p.MakingOf/>},
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