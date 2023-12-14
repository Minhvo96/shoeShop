import React, { useEffect, useState } from "react";

const CreateProduct = ({ data, setData }) => {
    const [product, setProduct] = useState({});

    const [maxId, setMaxId] = useState(0);

    const products = data.products;

    const handleChangeProduct = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };

    const handleCreate = () => {
        const products = data.products;
        products.push(product);

        setData({
            ...data,
            products: products
        })

        alert('Add new product successfully!');

        handleChangeMaxId();
    }

    const handleChangeMaxId = () => {
        let currentId = 0;
        products.map(item => {
            if (item.id > currentId) {
                currentId = item.id;
            }
        })
        setMaxId(currentId);
    }

    useEffect(() => {
        handleChangeMaxId();
    }, [])

    useEffect(() => {
        setProduct({
            ...product,
            id: maxId + 1
        })
    }, [maxId]);

    return (
        <>
            <h2>Create new Product</h2>
            <form action="">
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Company</label>
                        <input type="text" name="company" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Prev Price</label>
                        <input type="text" name="prevPrice" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">New Price</label>
                        <input type="text" name="newPrice" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Color</label>
                        <input type="text" name="color" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Category</label>
                        <input type="text" name="category" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label htmlFor="">Image</label>
                        <input type="text" name="img" className="form-control" required onChange={handleChangeProduct} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-4">
                        <button type="button" className="btn btn-outline-primary" onClick={() => handleCreate()}><i className="fa-solid fa-square-plus"></i> Add new Product</button>
                        <button className="btn btn-outline-secondary ms-3"><i className="fa-solid fa-xmark"></i> Cancel</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateProduct;