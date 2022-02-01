import React, {useState, useEffect} from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { useNavigate } from 'react-router-dom';

const PlaceOrderScreen = () => {

    const cart = useSelector(state => state.cart)
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            
        </div>
    )
};

export default PlaceOrderScreen;
