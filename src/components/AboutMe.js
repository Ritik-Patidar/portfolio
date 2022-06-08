import React from 'react';
// import Typewriter from 'typewriter-effect';
import resume from '../assets/document/Resume.pdf';

function AboutMe() {
    return (
        <>
            <div id="aboutMe" className="bg-white dark:text-primaryText text-primaryTextDark dark:bg-primary h-screen flex flex-col items-center justify-evenly">

                <div className="flex flex-col justify-center items-center" >
                    {/* <p className="text-3xl text-primaryText mt-12" >About Me</p> */}
                    <p className="text-lg md:text-3xl dark:text-primaryText text-primaryTextDark mt-4 font-bold" >WHO AM I?</p>
                    <span className="border-t-2 w-20 dark:border-primaryText border-primaryTextDark my-0.5 " ></span>
                    <span className="border-t-2 w-6  dark:border-primaryText border-primaryTextDark my-0.5" ></span>
               
                    <div className="w-full px-4 md:px-0 md:w-2/3 mt-8 md:mt-12 text-center" >
                        <p className="text-xs md:text-base dark:text-primaryText text-primaryTextDark" >My name is Ritik Patidar and I am currently working as Software Developer. I completed my degree in Bachelor of Technology in Computer Science and Engineering. I am much interested in developing new things which excite me a lot. :)</p><br />
                        <p className="text-xs md:text-base dark:text-primaryText text-primaryTextDark" >I love exploring new technologies and being a practitioner.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-2/3" >
                    {/* <p className="text-3xl dark:text-primaryText text-primaryTextDark mt-12" >About Me</p> */}
                    <p className="text-lg md:text-3xl dark:text-primaryText text-primaryTextDark mt-12 font-bold" >My Interests</p>
                    <span className="border-t-2 w-20 dark:border-primaryText border-primaryTextDark my-0.5 " ></span>
                    <span className="border-t-2 w-6  dark:border-primaryText border-primaryTextDark my-0.5" ></span>

                    <div className="flex justify-around py-6 w-full md:w-2/3">
                        <div className="w-20 h-20 rounded-lg flex flex-col  justify-center items-center bg-color1 bg-opacity-10 shadow-sm shadow-color1" >
                            <i className="fa-solid fa-gamepad text-lg md:text-3xl text-color1"></i>
                            <p className="text-color1 text-xs md:text-sm">Gaming</p>
                        </div>

                        <div className="w-20 h-20 rounded-lg flex flex-col  justify-center items-center bg-color2 bg-opacity-10 shadow-sm shadow-color2" >
                            <i className="fa-solid fa-headphones text-lg md:text-3xl text-color2"></i>
                            <p className="text-color2 text-xs md:text-sm">Music</p>
                        </div>

                        <div className="w-20 h-20 rounded-lg flex flex-col  justify-center items-center bg-color4 bg-opacity-10 shadow-sm shadow-color4" >
                            <i className="fa-solid fa-mug-saucer text-lg md:text-3xl text-color4"></i>
                            <p className="text-color4 text-xs md:text-sm">Coffee</p>
                        </div>

                    </div>
                </div>


                <div className="my-4" >
                    <a download href={resume} className="border text-sm md:text-lg dark:border-primaryText border-primaryTextDark rounded-lg px-4 py-4 dark:text-primaryText text-primaryTextDark bg-primaryText bg-opacity-10 hover:bg-opacity-30">Download Resume <i className="fa-solid fa-circle-arrow-down text-lg md:text-xl dark:text-primaryText text-primaryTextDark"></i></a>
                </div>

            </div>
        </>
    )
}

export default AboutMe