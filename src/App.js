import './App.scss';
import React from 'react';
import styleScroll from "./scrollbar.module.css";
// import Navbar from './components/Navbar'
import Me from './components/Me';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'

function App() {

    return (
        <div className="h-screen overflow-hidden">
            <div className={`h-full ${styleScroll.customScroll} overflow-y-scroll`}>
                {/* <Navbar /> */}
                <div className="">
                    <Me />
                    <AboutMe />
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default App;
