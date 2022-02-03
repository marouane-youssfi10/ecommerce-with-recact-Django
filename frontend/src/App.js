import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserListScreen';

function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                    <Container>
                        <Routes>
                            <Route path='/' exact element={<HomeScreen />}/>

                            <Route path='/login' element={<LoginScreen />}/>
                            <Route path='/register' element={<RegisterScreen />}/>

                            <Route path='/profile' element={<ProfileScreen />}/>
                            <Route path='/shipping' element={<ShippingScreen />}/>
                            <Route path='/placeorder' element={<PlaceOrderScreen />}/>
                            <Route path='/order/:id' element={<OrderScreen />}/>
                            <Route path='/payment' element={<PaymentScreen />}/>

                            <Route path='/product/:id' element={<ProductsScreen />}/>
                            
                            <Route path="/cart" element={<CartScreen />} />
                            <Route path="/cart/:id" element={<CartScreen />} />

                            <Route path="/admin/userslist" element={<UserListScreen />} />
                            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
                        </Routes>
                    </Container>
            </main>
            <Footer />  
        </Router>
    );
}

export default App;
