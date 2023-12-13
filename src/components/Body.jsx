import React, { useEffect, useState } from "react";
import data from "../data/products.json";

function SideBar() {
    const [products, setProducts] = useState(data.products);
    const [category, setCategory] = useState(null);
    const [colors, setColors] = useState(data.colors);
    const [prices, setPrices] = useState(data.prices);
    const [categories, setCategories] = useState(data.categories);
    const [filterCategoryStatus, setfilterCategoryStatus] = useState(false);

    const filterCategoryProducts = (categoryTitle) => {

    }
    
    const handleChangeCategory = (e) => {
        filterCategoryProducts(e.target.value);
    }


    return (
        <div className="col-md-3">
            <h3>Category</h3>
            <ul className="list-group" onChange={() => {setfilterCategoryStatus(false); handleChangeCategory();}}>
                {
                    data.categories.map((item) => {
                        return (
                            <li className="list-group-item" key={item.id}>
                                <input type="radio" name="category" value={item.title} onChange={() => {setfilterCategoryStatus(true); handleChangeCategory();}}/> {item.title}
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Price</h3>
            <ul className="list-group">
                {
                    data.prices.map((item) =>
                        // if (item.min == "All" || item.max == "Over $150") {
                        //     return (
                        //         <li className="list-group-item" key={item.id}>
                        //             <input type="radio" name="price" /> {item.max}
                        //         </li>
                        //     )
                        // }
                        // return (
                        //     <li className="list-group-item" key={item.id}>
                        //         <input type="radio" name="price" /> ${item.min} - ${item.max}
                        //     </li>
                        // )
                        item.min == "All" || item.max == "Over $150" ?
                            <li className="list-group-item">
                                <input type="radio" name="price" /> {item.max}
                            </li>
                            :
                            <li className="list-group-item">
                                <input type="radio" name="price" /> ${item.min} - {item.max}
                            </li>
                    )
                }
            </ul>
            <h3>Colors</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="radio" name="colors" style={{ backgroundImage: 'linear-gradient(to right, red, green)' }} className="form-check-input" /> All
                </li>
                {
                    data.colors.map((item) => {
                        return (
                            <li className="list-group-item">
                                <input type="radio" name="colors" style={{ backgroundColor: item.color }} className="form-check-input" /> {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function Recommended() {
    const [products, setProducts] = useState(data.products);
    const [companies, setCompanies] = useState(data.companies);
    const [companyTitle, setCompanyTitle] = useState(null);
    const [filterProduct, setFilterProduct] = useState([]);
    const [filterCompanyStatus, setFilterCompanyStatus] = useState(false);

    const handleChangeCompany = (companyTitle) => {
        setCompanyTitle(companyTitle);
    }

    const handleSetFilterStatus = (tf) => {
        setFilterCompanyStatus(tf);
    }

    useEffect(() => {
        const newProduct = products.filter(item => item.company === companyTitle);
        setFilterProduct(newProduct);
    }
        ,[companyTitle])

    return (
        <div className="col-md-9">
            <div>
                <h3>Recommended</h3>
            </div>
            <div className="d-flex gap-3 mb-3">
                <button type="button" className='btn btn-outline-primary px-5' onClick={() => handleSetFilterStatus(false)}>All Products</button>
                {
                    companies.map((item) => {
                        return (
                            <button type="button" className={filterCompanyStatus && item.title === companyTitle ? "btn btn-primary px-5" : "btn btn-outline-primary px-5"}
                             onClick={() => { handleSetFilterStatus(true); handleChangeCompany(item.title); }}>{item.title}</button>
                        )
                    })
                }
            </div>
            <div className="d-flex flex-wrap gap-5">
                <Content filterProduct={filterProduct} filterStatus={filterCompanyStatus}/>
            </div>
        </div>
    )
}



function Content({ filterProduct, filterStatus }) {
    return (
        <>
            {
                filterStatus ? filterProduct.map((shoe) => (
                    <div className="card" style={{ width: 200 }} key={shoe.id}>
                        <img src={shoe.img} className="card-img-top" alt="..." style={{ height: 150 }} />
                        <div className="card-body">
                            <h5 className="card-title">{shoe.title}</h5>
                            <div className="d-flex" style={{ width: 200 }}>
                                <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                <p className="ms-2">({shoe.reviews} reviews)</p>
                            </div>
                            <div className="d-flex gap-3">
                                <p style={{ textDecoration: 'line-through' }}>${shoe.prevPrice}</p>
                                <p>${shoe.newPrice}</p>
                            </div>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                )) :
                    data.products.map((shoe) => (
                        <div className="card" style={{ width: 200 }} key={shoe.id}>
                            <img src={shoe.img} className="card-img-top" alt="..." style={{ height: 150 }} />
                            <div className="card-body">
                                <h5 className="card-title">{shoe.title}</h5>
                                <div className="d-flex" style={{ width: 200 }}>
                                    <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: 'yellow' }}></i>
                                    <p className="ms-2">({shoe.reviews} reviews)</p>
                                </div>
                                <div className="d-flex gap-3">
                                    <p style={{ textDecoration: 'line-through' }}>${shoe.prevPrice}</p>
                                    <p>${shoe.newPrice}</p>
                                </div>
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}


export { SideBar, Recommended, Content };