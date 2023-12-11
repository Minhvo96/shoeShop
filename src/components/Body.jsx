import React from "react";


function SideBar() {
    return (
        <div className="col-md-3">
            <h3>Category</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="radio" name="category" /> All
                </li>
                <li className="list-group-item">
                    <input type="radio" name="category" /> Sneakers
                </li>
                <li className="list-group-item">
                    <input type="radio" name="category" /> Sandal
                </li>
                <li className="list-group-item">
                    <input type="radio" name="category" /> Flats
                </li>
                <li className="list-group-item">
                    <input type="radio" name="category" /> Heels
                </li>
            </ul>
            <h3>Price</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="radio" name="price" /> All
                </li>
                <li className="list-group-item">
                    <input type="radio" name="price" /> $0 - 50
                </li>
                <li className="list-group-item">
                    <input type="radio" name="price" /> $50 - 100
                </li>
                <li className="list-group-item">
                    <input type="radio" name="price" /> $100 - 150
                </li>
                <li className="list-group-item">
                    <input type="radio" name="price" /> Over $150
                </li>
            </ul>
            <h3>Colors</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundImage: 'linear-gradient(to right, red, green)' }} className="form-check-input" /> All
                </li>
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundColor: 'black' }} className="form-check-input" /> Black
                </li>
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundColor: 'blue' }} className="form-check-input" /> Blue
                </li>
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundColor: 'red' }} className="form-check-input" /> Red
                </li>
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundColor: 'green' }} className="form-check-input" /> Green
                </li>
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundColor: 'white' }} className="form-check-input" /> White
                </li>
            </ul>
        </div>
    )
}

function Recommended() {
    return (
        <div className="col-md-9">
            <div>
                <h3>Recommended</h3>
            </div>
            <div className="d-flex gap-3 mb-3">
                <ButtonShoes className='btn btn-outline-primary px-5' text='All Product'/>
                <button type="button" className="btn btn-outline-secondary">Nike</button>
                <button type="button" className="btn btn-outline-success">Adidas</button>
                <button type="button" className="btn btn-outline-danger">Puma</button>
                <button type="button" className="btn btn-outline-warning">Vans</button>
            </div>
            <div className="d-flex flex-wrap gap-5">
                <Content></Content>
                <Content></Content>
                <Content></Content>
                <Content></Content>
                <Content></Content>
            </div>

        </div>
    )
}

function Content() {
    return (
        <div className="card" style={{ width: 200 }}>
            <img src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/3-512.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

function ButtonShoes (props) {
    return (
        <button type="button" className={props.className}>{props.text}</button>
    )
}





export { SideBar, Recommended, Content };