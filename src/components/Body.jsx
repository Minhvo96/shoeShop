import React, { useEffect, useState } from "react";

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
                <ButtonShoes className='btn btn-outline-primary px-5' text='All Product' />
                <ButtonShoes className='btn btn-outline-secondary' text='Nike' />
                <ButtonShoes className='btn btn-outline-success' text='Adidas' />
                <ButtonShoes className='btn btn-outline-danger' text='Puma' />
                <ButtonShoes className='btn btn-outline-warning' text='Vans' />
            </div>
            <div className="d-flex flex-wrap gap-5">
                <Content />
            </div>

        </div>
    )
}



function Content() {
    // const [content, setContent] = useState('');
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // useEffect(() => {
    //     setIsFetching(true)
    //     fetch('https://jsonserver-vercel-api.vercel.app/products')
    //         .then(response => response.json())
    //         .then(json => {
    //             setData(json)
    //             setIsFetching(false)
    //         })
    // }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonserver-vercel-api.vercel.app/products')
            const result = await response.json()
            setData(result)
        }
        fetchData();
    }, [])

    return (
        data.map((shoe) => (
            <div className="card" style={{ width: 200 }} key={shoe.id}>
                <img src={shoe.img} className="card-img-top" alt="..." style={{ height: 150 }} />
                <div className="card-body">
                    <h5 className="card-title">{shoe.title}</h5>
                    <div className="d-flex" style={{ width: 555 }}>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                        <p className="ms-2">({shoe.reviews} reviews)</p>
                    </div>
                    <div className="d-flex gap-3">
                        <p style={{ textDecoration: 'line-through' }}>${shoe.prevPrice}</p>
                        <p>{shoe.newPrice}</p>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        ))
    )
}

function ButtonShoes(props) {
    return (
        <button type="button" className={props.className}>{props.text}</button>
    )
}





export { SideBar, Recommended, Content };