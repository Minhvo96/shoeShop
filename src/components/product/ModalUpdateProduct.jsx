import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const ModalUpdateProduct = ({ show, handleCloseModalUpdate, product, handleUpdateProducts }) => {
    const [newProduct, setNewProduct] = useState({});

    const handleChangeProduct = (e) => {
        setNewProduct({
            ...product,
            title: e.target.value
        });
        handleUpdateProducts(newProduct);
    }


    return (
        <Modal show={show} onHide={handleCloseModalUpdate} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" className="form-control" defaultValue={product.title} onChange={handleChangeProduct} />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Company</label>
                            <input type="text" name="company" className="form-control" defaultValue={product.company} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Prev Price</label>
                            <input type="text" name="prevPrice" className="form-control" defaultValue={product.prevPrice} />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">New Price</label>
                            <input type="text" name="newPrice" className="form-control" defaultValue={product.newPrice} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Color</label>
                            <input type="text" name="color" className="form-control" defaultValue={product.color} />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Category</label>
                            <input type="text" name="category" className="form-control" defaultValue={product.category} />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalUpdate}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { handleUpdateProducts(newProduct); handleCloseModalUpdate() }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUpdateProduct;