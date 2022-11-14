import React from 'react';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <>
                <About />
                <Experience />
                <Footer />
            </>
        </div>
    );
}

export default App;
