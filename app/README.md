nvm use 18.17.0


import React, { useEffect, useState } from 'react';
import Login from './Auth/Login';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading && (
                <div id="preloader" className='preloader'>
                    <div data-loader="dual-ring"></div>
                </div>
            )}
            <div id="main-wrapper">
                <Header />
                <Home />
                <Footer />
            </div>
            <Login />
        </>
    );
}

export default App;
