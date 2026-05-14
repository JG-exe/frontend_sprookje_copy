import {createBrowserRouter} from "react-router";
import AppLayout from "./layouts/AppLayout.jsx";
import RootLayout from "./layouts/RootLayout";
import BareLayout from "./layouts/BareLayout";
import Routes from "./routes/constants/Routes.js";
import {FairytaleRoute} from "./routes/FairytaleRoute.jsx";
import * as p from "./pages";


const router = createBrowserRouter([
        {
            element: <AppLayout/>,
            children: [{
                element: <RootLayout/>,
                children: [
                    {path: Routes.Home, element: <p.Home/>},
                    {path: Routes.All, element: <p.All/>},
                    {path: Routes.MakingOf, element: <p.MakingOf/>},
                ],
            }
            ]
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