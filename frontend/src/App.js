import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';


function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                    <Container>
                        <Routes>
                            <Route path='/' exact element={<HomeScreen />}/>
                            <Route path='/product/:id' element={<ProductsScreen />}/>
                            <Route path="/cart" element={<CartScreen />} />
                            <Route path="/cart/:id" element={<CartScreen />} />
                        </Routes>
                    </Container>
            </main>
            <Footer />  
        </Router>
    );
}

export default App;
