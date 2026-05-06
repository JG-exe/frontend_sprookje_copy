import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <>
            <Header />
            <div className="ctx">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
