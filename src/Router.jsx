import {createBrowserRouter} from "react-router";
import RootLayout from "./layouts/RootLayout";
import BareLayout from "./layouts/BareLayout";
import Home from "./pages/Home";
import All from "./pages/All";
import MakingOf from "./pages/MakingOf";
import {FairytaleRoute} from "./routes/FairytaleRoute.jsx";


const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/All", element: <All/>},
            {path: "/MakingOf", element: <MakingOf/>},
        ],
    },
    {
        element: <BareLayout/>,
        children: [
            {
                path: "/fairytale", element: <FairytaleRoute />
            },
        ],
    },
]);

export default router;