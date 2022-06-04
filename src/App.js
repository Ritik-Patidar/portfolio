import './App.scss';
import React, {useRef} from 'react'
import styleScroll from "./scrollbar.module.css";
import Navbar from './components/Navbar'
import Me from './components/Me';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'

function App() {

    // const refToAboutMe = useRef(null)

    // const executeScroll = () => refToAboutMe.current.scrollIntoView() 

    return (
        <div className="h-screen overflow-hidden">
            <div className={`h-full ${styleScroll.customScroll} overflow-y-scroll`}>
                {/* <Navbar /> */}
                <div className="bg-primary">
                    <Me />
                    <AboutMe />
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default App;
