import React from 'react'

function Navbar() {
    return (
        <div className="">
            <ul class="flex fixed w-screen justify-between py-5 px-8 bg-primary text-primaryText">
                <p className="text-2xl" >Ritik</p>
                <div className="flex " >
                    <li className="mr-6 hover:text-cyan-600">
                        <a className="" href="#">About Me</a>
                    </li>
                    <li className="mr-6 hover:text-cyan-600">
                        <a className="" href="#">Skills</a>
                    </li>
                    <li className="mr-6 hover:text-cyan-600">
                        <a className="" href="#">Contact</a>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar