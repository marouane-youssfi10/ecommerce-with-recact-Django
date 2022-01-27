import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions'
// import axios from 'axios';

function HomeScreen() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(listProducts());
    }, [])

    const products = [];

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default HomeScreen;
