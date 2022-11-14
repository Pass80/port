import React from 'react';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';

function App() {
    return (
        <div className="App">
            <>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Portfolio />
                <Footer />
            </>
        </div>
    );
}

export default App;
