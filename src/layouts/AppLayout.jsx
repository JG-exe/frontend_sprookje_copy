import { Outlet } from "react-router";
import { SearchProvider } from "../contexts/SearchContext";

export default function AppLayout() {
    return (
        <SearchProvider>
            <Outlet />
        </SearchProvider>
    );
}
