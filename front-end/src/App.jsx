import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Orders';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-5xl'>
          <Routes>
            {/* Main group */}
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/orders' element={<Order />} />

            {/* Visually separated group */}
            <Route path='/login' element={
              <div className='mt-12 border-t pt-6'>
                <Login />
              </div>
            } />
            <Route path='/contact' element={
              <div className='mt-12 border-t pt-6'>
                <Contact />
              </div>
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
