import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, Link } from "react-router-dom";//use layout as base and upr niche ka chij same rkhega

function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout