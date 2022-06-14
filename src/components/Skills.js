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
        <div className="z-10 bg-primaryLight dark:text-primaryText text-primaryTextDark dark:bg-primary  h-full md:h-screen flex flex-col justify-evenly items-center">

            <div className="flex flex-col justify-center items-center" >
                {/* <p className="text-3xl text-primaryText mt-12" >About Me</p> */}
                <p className="text-lg md:text-3xl mt-4 font-bold" >Here Are Some Of My Expertise</p>
                <span className="border-t-2 w-20 dark:border-primaryText border-primaryTextDark my-0.5 " ></span>
                <span className="border-t-2 w-6  dark:border-primaryText border-primaryTextDark my-0.5" ></span>
            </div>

            <div className=" w-4/6 grid gap-7 mt-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" >

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={react} alt="React" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">React</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={javascript} alt="Javascript" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Javascript</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={typescript} alt="Typescript" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Typescript</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={react} alt="React Native" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">React Native</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={html} alt="HTML" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">HTML</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={css} alt="CSS" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">CSS</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={tailwind} alt="Tailwind CSS" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Tailwind CSS</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={bootstrap} alt="Bootstrap" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Bootstrap</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={node} alt="Node Js" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Node Js</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={redux} alt="Redux" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Redux</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={python} alt="Python" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Python</p>
                </div>

                <div class="flex flex-col justify-start items-center dark:hover:bg-secondary hover:bg-gray-100 rounded-md py-3 px-3 mb-4">
                    <div class="w-16 h-16 rounded-full flex flex-col  justify-center items-center bg-green-500 bg-opacity-10">
                        <img src={github} alt="Github" />
                    </div>
                    <p class="mt-5 text-center  text-sm ">Github</p>
                </div>

            </div>

        </div>
    )
}

export default Skills