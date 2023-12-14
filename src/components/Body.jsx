import React, { useEffect, useState } from "react";

function SideBar({data}) {
    const [products, setProducts] = useState(data.products);
    const [filterProduct, setFilterProduct] = useState([]);

    const [companies, setCompanies] = useState(data.companies);
    const [companyTitle, setCompanyTitle] = useState(null);
    const [filterCompanyStatus, setFilterCompanyStatus] = useState(false);

    const [categoriesTitle, setCategoriesTitle] = useState(null);
    const [filterCategoryStatus, setFilterCategoryStatus] = useState(false);

    const [colorsTitle, setColorsTitle] = useState(null);
    const [filterColorStatus, setFilterColorStatus] = useState(false);

    const [pricesTitle, setPricesTitle] = useState([]);
    const [filterPriceStatus, setFilterPriceStatus] = useState(false);

    const handleChangeCompany = (companyTitle) => {
        setCompanyTitle(companyTitle);
    }
    const handleSetCompanyFilterStatus = (tf) => {
        setFilterCompanyStatus(tf);
    }


    const handleChangeCategory = (categoryTitle) => {
        console.log(categoryTitle);
        setCategoriesTitle(categoryTitle);
    }
    const handleSetCategoryFilterStatus = (tf) => {
        setFilterCategoryStatus(tf);
    }

    const handleChangePrice = (priceMin, priceMax) => {
        setPricesTitle([priceMin, priceMax]);
    }
    const handleSetPriceFilterStatus = (tf) => {
        setFilterPriceStatus(tf);
    }

    const handleChangeColor = (colorTitle) => {
        setColorsTitle(colorTitle);
    }
    const handleSetColorFilterStatus = (tf) => {
        setFilterColorStatus(tf);
    }


    const handleSetFilterProduct = () => {
        if (filterCompanyStatus && filterCategoryStatus && filterColorStatus && filterPriceStatus) {
            const newProductWithCompanyAndStatusAndColor = products.filter(item => item.company === companyTitle && item.category === categoriesTitle && item.color === colorsTitle && (parseInt(item.newPrice) > parseInt(pricesTitle[0]) && parseInt(item.newPrice) <= parseInt(pricesTitle[1]) || parseInt(item.newPrice) > parseInt(pricesTitle[0])));
            setFilterProduct(newProductWithCompanyAndStatusAndColor);
            return;
        }

        if (filterCompanyStatus && filterCategoryStatus && filterPriceStatus) {
            const newProductWithCompanyAndStatus = products.filter(item => item.company === companyTitle && item.category === categoriesTitle && (parseInt(item.newPrice) > parseInt(pricesTitle[0]) && parseInt(item.newPrice) <= parseInt(pricesTitle[1]) || parseInt(item.newPrice) > parseInt(pricesTitle[0])));
            setFilterProduct(newProductWithCompanyAndStatus);
            return;
        }

        if (filterCompanyStatus && filterColorStatus && filterPriceStatus) {
            const newProductWithCompanyAndStatusAndColor = products.filter(item => item.company === companyTitle && item.color === colorsTitle && (parseInt(item.newPrice) > parseInt(pricesTitle[0]) && parseInt(item.newPrice) <= parseInt(pricesTitle[1]) || parseInt(item.newPrice) > parseInt(pricesTitle[0])));
            setFilterProduct(newProductWithCompanyAndStatusAndColor);
            return;
        }

        if (filterCategoryStatus && filterColorStatus && filterPriceStatus) {
            const newProductWithCompanyAndStatusAndColor = products.filter(item => item.category === categoriesTitle && item.color === colorsTitle && (parseInt(item.newPrice) > parseInt(pricesTitle[0]) && parseInt(item.newPrice) <= parseInt(pricesTitle[1]) || parseInt(item.newPrice) > parseInt(pricesTitle[0])));
            setFilterProduct(newProductWithCompanyAndStatusAndColor);
            return;
        }

        if (filterCompanyStatus && filterCategoryStatus && filterColorStatus) {
            const newProductWithCompanyAndStatusAndColor = products.filter(item => item.company === companyTitle && item.category === categoriesTitle && item.color === colorsTitle);
            setFilterProduct(newProductWithCompanyAndStatusAndColor);
            return;
        }

        if (filterCompanyStatus && filterColorStatus) {
            const newProductWithCompanyAndColor = products.filter(item => item.company === companyTitle && item.color === colorsTitle);
            setFilterProduct(newProductWithCompanyAndColor);
            return;
        }

        if (filterCategoryStatus && filterColorStatus) {
            const newProductWithCompanyAndStatusAndColor = products.filter(item => item.company === companyTitle && item.category === categoriesTitle && item.color === colorsTitle);
            setFilterProduct(newProductWithCompanyAndStatusAndColor);
            return;
        }

        if (filterCompanyStatus && filterColorStatus) {
            const newProductWithCompanyAndColor = products.filter(item => item.company === companyTitle && item.color === colorsTitle);
            setFilterProduct(newProductWithCompanyAndColor);
            return;
        }


        if (filterCompanyStatus && filterCategoryStatus) {
            const newProductWithCompanyAndStatus = products.filter(item => item.company === companyTitle && item.category === categoriesTitle);
            setFilterProduct(newProductWithCompanyAndStatus);
            return;
        }


        if (filterCompanyStatus) {
            const newProductWithCompany = products.filter(item => item.company === companyTitle || item.company === 'all');
            setFilterProduct(newProductWithCompany);
            return;
        }

        if (filterCategoryStatus) {
            const newProductWithCategory = products.filter(item => item.category === categoriesTitle || item.category === 'all');
            setFilterProduct(newProductWithCategory);
            return;
        }

        if (filterColorStatus) {
            const newProductWithColor = products.filter(item => item.color === colorsTitle || item.color === 'all');
            setFilterProduct(newProductWithColor);
            return;
        }

        if (filterPriceStatus) {
            const newProductWithPrice = products.filter(item => parseInt(item.newPrice) > parseInt(pricesTitle[0]) && parseInt(item.newPrice) <= parseInt(pricesTitle[1]) || parseInt(item.newPrice) > parseInt(pricesTitle[0]));
            setFilterProduct(newProductWithPrice);
            return;
        }

    }


    useEffect(() => { handleSetFilterProduct() }
        , [companyTitle, categoriesTitle, colorsTitle, pricesTitle])

    return (
        <div className="d-flex">
            <div className="col-md-2">
                <h3>Category</h3>
                <ul className="list-group">
                    <li className="list-group-item" >
                        <input type="radio" name="category" onClick={() => { handleSetCategoryFilterStatus(false); handleChangeCategory('all') }} /> All
                    </li>
                    {
                        data.categories.map((item) => {
                            return (
                                <li className="list-group-item" key={item.id}>
                                    <input type="radio" name="category" value={item.title}
                                        onClick={() => { handleSetCategoryFilterStatus(true); handleChangeCategory(item.title); }} /> {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>Price</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="radio" name="price" onClick={() => { { handleSetPriceFilterStatus(false); handleChangePrice('all') } }} /> All
                    </li>
                    {
                        data.prices.map((item) =>
                            <li className="list-group-item">
                                <input type="radio" name="price" onClick={() => { { handleSetPriceFilterStatus(true) }; { handleChangePrice(item.min, item.max) } }} /> ${item.min} - {item.max}
                            </li>
                        )
                    }
                </ul>
                <h3>Colors</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="radio" name="colors" style={{ backgroundImage: 'linear-gradient(to right, red, green)' }} className="form-check-input" onClick={() => { handleSetColorFilterStatus(false); handleChangeColor('all') }} /> All
                    </li>
                    {
                        data.colors.map((item) => {
                            return (
                                <li className="list-group-item" key={item.id}>
                                    <input type="radio" name="colors" style={{ backgroundColor: item.color }} className="form-check-input" onClick={() => { handleSetColorFilterStatus(true); handleChangeColor(item.title); }} /> {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="col-md-10">
                <div>
                    <h3>Recommended</h3>
                </div>
                <div className="d-flex gap-3 mb-3">
                    <button type="button" className={!filterCompanyStatus ? 'btn btn-primary px-5' : 'btn btn-outline-primary px-5'} onClick={() => { handleSetCompanyFilterStatus(false); handleChangeCompany('all'); }}>All Products</button>
                    {
                        companies.map((item) => {
                            return (
                                <button type="button" className={filterCompanyStatus && item.title === companyTitle ? "btn btn-primary px-5" : "btn btn-outline-primary px-5"}
                                    onClick={() => { handleSetCompanyFilterStatus(true); handleChangeCompany(item.title); }}>{item.title}</button>
                            )
                        })
                    }
                </div>
                <div className="d-flex flex-wrap gap-5">
                    <Content filterProduct={filterProduct} filterCompanyStatus={filterCompanyStatus} filterCategoryStatus={filterCategoryStatus} filterColorStatus={filterColorStatus} filterPriceStatus={filterPriceStatus} data={data}/>
                </div>
            </div>
        </div>
    )
}

function Content({ filterProduct, filterCompanyStatus, filterCategoryStatus, filterColorStatus, filterPriceStatus, data }) {
    return (
        <>
            {
                filterCompanyStatus || filterCategoryStatus || filterColorStatus || filterPriceStatus ? filterProduct.map((shoe) => (
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


export { SideBar, Content };