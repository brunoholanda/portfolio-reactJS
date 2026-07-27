import { Outlet } from "react-router-dom";
import Header from "components/Header/indes";
import Footer from "components/Footer";

export default function PageBody(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}