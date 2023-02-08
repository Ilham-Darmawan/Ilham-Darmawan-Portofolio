// Import React
import React from "react";
import { Link } from "react-router-dom";

export default function Jform() {
    function submitHandle() {
        alert("Your Email has been send")
    }

    return (
        <div className="w-screen h-screen p-4 bg-gradient-to-br from-gray-700 via-gray-900 to-black flex justify-center items-center">
            <div className="border border-gray-900 flex justify-center items-center p-10 m-10 bg-gray-900">
                <form action="" typeof="POST">
                    <h1 className="text-white font-bold text-2xl text-center">Contact Me</h1>
                    <form action="https://formsubmit.co/milham5799@gmail.com" method="POST">
                        <div className="mt-8 w-full">
                            <input className="m-2 text-white bg-gray-800 p-3 outline-none focus:-translate-y-2 focus:scale-100 duration-500 transition ease-in-out" type="text" name="name" placeholder="Full Name" required />
                            <input className="m-2 text-white bg-gray-800 p-3 outline-none focus:-translate-y-2 focus:scale-100 duration-500 transition ease-in-out" type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="mt-4 w-full flex justify-center">
                            <textarea className="w-full m-2 text-white bg-gray-800 p-3 outline-none focus:-translate-y-2 focus:scale-100 duration-500 transition ease-in-out" placeholder="Your Message" name="message" rows="10" required />
                        </div>
                        <div className="mt-4 w-full flex justify-center">
                            <div className="w-full flex justify-end">
                                <Link class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-l from-sky-400 to-indigo-900 group-hover:from-sky-400 group-hover:to-indigo-900 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-indigo-900 dark:focus:ring-lime-800" to='/'>
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Back
                                    </span>
                                </Link>
                                <button class="ml-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-l from-sky-400 to-indigo-900 group-hover:from-sky-400 group-hover:to-indigo-900 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-indigo-900 dark:focus:ring-lime-800" type="submit" onClick={submitHandle}>
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Send
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </form>
            </div>
        </div>
    )
}