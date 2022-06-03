import React from 'react';
import Typewriter from 'typewriter-effect';

function AboutMe() {
    return (
        <>
            <div className="me h-screen flex justify-center items-center " >
                <div className="rounded-t-full shadow-lg shadow-gray-800 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out " style={{ background: "#24282e", borderBottomRightRadius: "500%", borderBottomLeftRadius: "500%" }} >
                    <div className="rounded-full" style={{ border: "20px solid #1e3d3b" }} >
                        <div className="rounded-full" style={{ border: "10px solid #24a78c" }} >
                            <img className="h-48 w-48 md:h-60 md:w-60 rounded-full border-0" src="%PUBLIC_URL%/me.jpg" alt="" />
                        </div>
                    </div>

                    <div className="text-center my-4 px-4" >
                        <p className="text-lg md:text-2xl text-primaryText" >Ritik Patidar</p>

                        <p className="text-sm md:text-base text-primaryText my-2" >
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
                            <a href="https://www.linkedin.com/in/ritik-patidar" target="_blank">
                                <div className="w-10 h-10 flex flex-col justify-center items-center border rounded-full mx-2 hover:shadow-sm hover:shadow-primaryText" >
                                    <i className="fa-brands fa-linkedin-in text-xl text-primaryText"></i>
                                </div>
                            </a>
                            <a href="https://github.com/Ritik-Patidar" target="_blank">
                                <div className="w-10 h-10 flex flex-col justify-center items-center border rounded-full mx-2 hover:shadow-sm hover:shadow-primaryText" >
                                    <i className="fa-brands fa-github text-xl text-primaryText"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe