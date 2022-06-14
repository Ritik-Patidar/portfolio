import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import me from '../assets/img/me.jpg';
import { ThemeContext } from '../themeContext';
import Toggle from './Toggle';
import Particle from "react-particles-js";
import darkParticlesConfig from "../assets/darkParticlesConfig.json";
import lightParticlesConfig from "../assets/lightParticlesConfig.json";

function AboutMe() {

    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (e) => {
        setTheme(e.target.checked ? 'dark' : 'light')
    }


    return (
        <>
            <div className="h-screen" >
                <Particle params={theme === 'dark' ? darkParticlesConfig : lightParticlesConfig} className="App-particles__container absolute h-full w-full -z-10 dark:bg-particlePrimary" />
                <div className="h-full flex flex-col justify-around items-center " >
                    {/* <div className="w-full flex flex-row justify-end mr-16">
                        <Toggle
                            onChange={toggleTheme}
                            checked={theme === 'dark' ? true : false}
                        />
                    </div> */}

                    <div className="bg-primaryLight dark:bg-primary border border-particlePrimary dark:text-primaryText text-primaryTextDark rounded-t-full shadow-sm dark:shadow-xl shadow-white dark:shadow-gray-800 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out " style={{ borderBottomRightRadius: "500%", borderBottomLeftRadius: "500%" }} >
                        <div className="rounded-full" style={{ border: "20px solid #1e3d3b" }} >
                            <div className="rounded-full" style={{ border: "10px solid #24a78c" }} >
                                <img className="h-48 w-48 md:h-60 md:w-60 rounded-full border-0" src={me} alt="" />
                            </div>
                        </div>

                        <div className="text-center my-4 px-4" >
                            <p className="text-lg md:text-2xl font-semibold" >Ritik Patidar</p>

                            <p className="text-sm md:text-base my-2" >
                                <Typewriter
                                    options={{
                                        strings: ['Web Developer',
                                            'Full Stack Developer',
                                            'App Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>


                            <div className="flex justify-center mt-3" >
                                <a rel="noreferrer" href="https://www.linkedin.com/in/ritik-patidar" target="_blank">
                                    <div className="w-10 h-10 flex flex-col justify-center items-center border  border-primary dark:border-primaryText rounded-full mx-2 hover:shadow-sm dark:hover:shadow-primaryText hover:shadow-primary" >
                                        <i className="fa-brands fa-linkedin-in text-2xl "></i>
                                    </div>
                                </a>
                                <a rel="noreferrer" href="https://github.com/Ritik-Patidar" target="_blank">
                                    <div className="w-10 h-10 flex flex-col justify-center items-center border  border-primary dark:border-primaryText rounded-full mx-2 hover:shadow-sm dark:hover:shadow-primaryText hover:shadow-primary" >
                                        <i className="fa-brands fa-github text-2xl "></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer mouse"></div>
                    {/* <div className='cursor-pointer scroll'></div> */}
                    {/* <div className=" arrow"></div> */}
                </div>
            </div>
        </>
    )
}

export default AboutMe