import { FC } from "react";
import { useAuth } from "../../context/auth";
import Login from "../login";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {

    const { user } = useAuth();

    return (
        <div>
            <Navbar />
            <main>
                { user ? children : <Login /> }
            </main>
        </div>
    )
}

export default Layout;