import React from "react";
import Header from "./Header";
import { SideBar, Recommended, Content } from "./Body";

function ShoesRender() {
    return (
        <>
            <div className="container">
                <Header></Header>
                <div className="col-md-12 row mt-5">
                    <SideBar></SideBar>
                    <Recommended></Recommended>
                </div>
            </div>
        </>
    )
}

export default ShoesRender;