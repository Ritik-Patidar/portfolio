import React from 'react';
import react from '../assets/img/react.svg';
import javascript from '../assets/img/javascript.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import node from '../assets/img/node.svg';
import typescript from '../assets/img/typescript.svg';
import tailwind from '../assets/img/tailwind.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import python from '../assets/img/python.svg';
import redux from '../assets/img/redux.svg';
import github from '../assets/img/github.svg';


function Skills() {
    return (
        <div className="h-screen flex flex-col justify-evenly items-center" style={{ background: "#1E2225" }} >

            <div className="flex flex-col justify-center items-center" >
                {/* <p className="text-3xl text-primaryText mt-12" >About Me</p> */}
                <p className="text-lg md:text-3xl text-primaryText mt-4" >Here Are Some Of My Expertise</p>
                <span className="border-t-2 w-20 border-primaryText my-0.5 " ></span>
                <span className="border-t-2 w-6  border-primaryText my-0.5" ></span>
            </div>

            <div className=" w-4/6 grid gap-7 mt-12 grid-cols-1 sm:grid-cols-3 md:grid-cols-4" >
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={react} alt="React" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">React</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={javascript} alt="Javascript" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Javascript</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={typescript} alt="Typescript" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Typescript</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={react} alt="React Native" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">React Native</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={html} alt="HTML" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">HTML</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={css} alt="CSS" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">CSS</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={tailwind} alt="Tailwind CSS" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Tailwind CSS</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={bootstrap} alt="Bootstrap" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Bootstrap</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={node} alt="Node Js" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Node Js</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={redux} alt="Redux" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Redux</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={python} alt="Python" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Python</p>
                </div>
                
                <div class="flex flex-col justify-start items-center hover:bg-primary rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={github} alt="Github" />
                    </div>
                    <p class="dark:text-white text-black mt-5 text-center  text-sm ">Github</p>
                </div>
            
            </div>

        </div>
    )
}

export default Skills