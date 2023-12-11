import React from "react";
import '../components/header.css';

function Header() {
    return (
        <div className="container d-flex header">
                <div className="col-md-3">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="col-md-5">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Enter your search shoes" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-4 icon d-flex">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    <i className="fa-solid fa-user"></i>
                </div>
        </div>
    )
}
export default Header;