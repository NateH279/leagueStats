import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout