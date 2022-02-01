import React, {useState, useEffect} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartAction';


function PaymentScreen() {

    // getting search & navigate & dispatch functionality
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    if(!shippingAddress.address){
        navigate('/shipping');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>

                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </div>
    )
}

export default PaymentScreen;
