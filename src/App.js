import './App.scss';
import styleScroll from "./scrollbar.module.css";
import Me from './components/Me';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="h-screen overflow-hidden">
            <div className={`h-full ${styleScroll.customScroll} overflow-y-scroll`}>
                {/* <Navbar /> */}
                <div className="bg-primary">
                    <Me />
                    <AboutMe />
                </div>
            </div>
        </div>
    );
}

export default App;
