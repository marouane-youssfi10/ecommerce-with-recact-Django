import React, {useState, useEffect} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userAction';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function LoginScreen() {

    // getting search & navigate & dispatch functionality
    const { search } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // declare email and password
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const redirect = search ? search.split('=')[1] : '/'

    // get data from reducer
    const userLogin = useSelector(state => state.userLogin);
    const {error, loading, userInfo} = userLogin;

    useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return(
        <div>
            <h1>Sign In</h1>
            {
                error && <Message variant='danger'>{error}</Message>
            }
            {
                loading && <Loader />
            }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?<Link
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </div>
    ) 
  
}

export default LoginScreen;
