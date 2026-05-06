import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import BareLayout from "./layouts/BareLayout";
import Home from "./pages/Home";
import All from "./pages/All";
import MakingOf from "./pages/MakingOf";
import Fairytale from "./pages/Fairytale.jsx";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/All", element: <All /> },
            { path: "/MakingOf", element: <MakingOf /> },
        ],
    },
    {
        element: <BareLayout />,
        children: [
            { path: "/fairytale", element: <Fairytale /> },
        ],
    },
]);

export default router;