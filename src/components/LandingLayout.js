import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const LandingLayout = () => {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default LandingLayout