// Import React
import React, { useEffect } from "react"
import { Link } from "react-router-dom"

// Import AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Assets
import profile from "./profile.jpg"
import profile2 from "./profile-2.PNG"
import "./../../icons/font-awesome-4.7.0/css/font-awesome.min.css"

export default function HomePage() {

    function cvHandle() {
        alert("I am very sorry, i still write my CV now, i will post it soon as possible")
    }

    function projectHandle() {
        alert("I am very sorry, i still make my first project right now, i will post it soon as possible")
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="bg-costumGray">
            {/* Header Section */}
            <div className="w-full flex" data-aos="fade-up" data-aos-anchor-placement="center-center">
                <div className="w-1/2 bg-costumGray">
                    <div className="w-full  p-persent_5 m-persent_10 ml-persent_20 tablet:ml-persent_5">
                        <p className="text-yellow-50 font-bold text-xl opacity-90">Hello</p>
                        <p className="text-costumYellow text-6xl">I'm Ilham</p>
                        <p className="text-yellow-50 text-2xl mt-4 font-bold opacity-90">Front End Developer</p>
                        <a href="#SocialMedia" className="relative inline-flex items-center justify-center w-28 leading-9 text-lg font-medium mt-4 tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-costumYellow rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-costumGray border border-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-costumGray border border-costumYellow rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-costumYellow-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-costumYellow">HIRE ME</span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 p-0 pr-persent_5" style={{ background: "linear-gradient(to right, rgb(44,44,44) 0%, rgb(44,44,44) 20%, rgb(251,184,53) 20%, rgb(251,184,53) 100%)" }}><img src={profile} className="w-1/2 rounded tablet:w-11/12 tablet:mt-persent_20" alt="Foto Profile" /></div>
            </div>

            {/* Profile Section */}
            <div className="w-full" data-aos="fade-up" data-aos-anchor-placement="center-center">
                <div className="w-full bg-costumGray2">
                    <div className="w-11/12 bg-costumGray2 p-10 flex tablet:flex-col justify-center items-center tablet:w-full">
                        <div className="w-4/12 tablet:w-full tablet:ml-4 tablet:mb-10 tablet:m-auto">
                            <img className=" mr-9" src={profile2} alt="profile" />
                        </div>
                        <div className="w-8/12">
                            <div>
                                <div>
                                    <h1 className="text-white font-bold text-3xl">About Me</h1>
                                    <div className="border-2 border-costumYellow mt-4 w-1/12 tablet:w-1/3"></div>
                                </div>
                                <div className="mt-8 text-white opacity-70">
                                    <p>Hello, my full name is Muhamad Ilham Darmawan, everyone call me Ilham, I am a student from <Link className="underline" to='https://www.uinjkt.ac.id/' target="_blank" rel="noopener noreferrer">Syarif Hidayatullah Jakarta State Islamic University, Jakarta</Link>. I am a beginner front end web developer who is looking for job</p>
                                    <p className="mt-8">My experience covers basic things like HTML, CSS, React, JavaSript, Tailwind, Bootstrap, and others. Of course, I'm also ready to learn new things</p>
                                </div>
                                <div className="flex mt-6">
                                    <a href="#SocialMedia" className="text-center relative inline-flex items-center justify-start leading-9 w-24 overflow-hidden font-bold rounded-full group tablet:w-32 tablet:text-sm">
                                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                        <span className="relative w-full text-costumYellow transition-colors text-center duration-200 ease-in-out group-hover:text-gray-900">HIRE ME</span>
                                        <span className="absolute inset-0 border-2 border-costumYellow hover:border-white rounded-full"></span>
                                    </a>
                                    <a href="#_" onClick={cvHandle} className="text-center relative p-0.5 inline-flex ml-8 items-center justify-center font-bold overflow-hidden group rounded-md tablet:text-sm tablet:w-44">
                                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative text-white">DOWNLOAD CV</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Section */}
            <div className="p-12 bg-costumGray" data-aos="fade-up" data-aos-anchor-placement="center-center">
                <div className="flex flex-col bg-costumGray justify-center items-center">
                    <div className="w-1/2">
                        <p className="font-bold text-white text-4xl">Projects</p>
                        <div className="border-2 border-costumYellow mt-4 w-2/12 tablet:w-10/12"></div>
                        <p className="mt-5 text-white opacity-70">For now, my project is focus on design web for product, i still making my first project right now</p>
                    </div>
                    <div className="mt-4 w-1/2 tablet:w-full">
                        <div className="grid gap-x-8 gap-y-8 grid-cols-2 tablet:grid-cols-1 mt-5">
                            <div onClick={projectHandle} className="bg-project1Img rounded bg-center hover:opacity-50 cursor-pointer">
                                <div className="p-4 w-full backdrop-opacity-30 backdrop-invert rounded">
                                    <i className="fa fa-columns text-black/90" style={{ fontSize: 30 }}></i>
                                    <p className="mt-3 text-2xl text-black/90 font-bold">Cosmetic Web</p>
                                    <p className="mt-3 text-black/90 text-justify font-semibold">Description is not available because it's not finish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer 1 */}
            <div className="w-full flex justify-center items-center bg-mossaic p-2 py-5 bg-center" data-aos="fade-up" data-aos-anchor-placement="center-center">
                <div className="w-1/3 bg-transparent flex items-center flex-col tablet:w-full text-center">
                    <p className="text-white font-bold text-3xl tablet:text-2xl tablet:w-full">Have any project in mind ?</p>
                    <div className="border-2 border-white mt-4 w-2/12 tablet:w-1/2"></div>
                    <Link to='https://wa.me/+628811703754' target="_blank" rel="noopener noreferrer" className="relative w-24 leading-8 text-center mt-4 font-semibold overflow-hidden text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">HIRE ME</span>
                    </Link>
                </div>
            </div>

            {/* Footer 2 */}
            <div className="w-full justify-center items-center flex bg-costumGray" id="SocialMedia">
                <div className="w-2/3 bg-transparent flex flex-col justify-center items-center my-10 text-center">
                    <p className="text-gray-400">Still have questions ? feel free to contact me, fast respone on WhatsApp</p>
                    <div className="flex justify-center items-center mt-5">
                        <Link to="https://www.linkedin.com/in/muhamad-ilham-darmawan-94a085221/" target="_blank" rel="noopener noreferrer" className="rounded-full cursor-pointer bg-gray-700 duration-700 leading-9 w-9 text-center text-white m-2 hover:text-white hover:bg-costumYellow"><i className="fa fa-linkedin"></i></Link>
                        <Link to='https://github.com/Ilham-Darmawan' target="_blank" rel="noopener noreferrer" className="rounded-full cursor-pointer bg-gray-700 duration-700 leading-9 w-9 text-center text-white m-2 hover:text-white hover:bg-costumYellow"><i className="fa fa-github"></i></Link>
                        <Link to='https://www.instagram.com/ilham.daemawa/' target="_blank" rel="noopener noreferrer" className="rounded-full cursor-pointer bg-gray-700 duration-700 leading-9 w-9 text-center text-white m-2 hover:text-white hover:bg-costumYellow"><i className="fa fa-instagram"></i></Link>
                        <Link to='https://wa.me/+628811703754' target="_blank" rel="noopener noreferrer" className="rounded-full cursor-pointer bg-gray-700 duration-700 leading-9 w-9 text-center text-white m-2 hover:text-white hover:bg-costumYellow"><i className="fa fa-whatsapp"></i></Link>
                        <Link to='/Gform' className="rounded-full cursor-pointer bg-gray-700 duration-700 leading-9 w-9 text-center text-white m-2 hover:text-white hover:bg-costumYellow"><i className="fa fa-google"></i></Link>
                    </div>
                    <div className="border opacity-20 mt-12 mb-3 border-gray-400 w-full"></div>
                    <p className="text-gray-400">Copyright © 2023 Ilham's Portofolio</p>
                </div>
            </div>
        </ div>
    )
}