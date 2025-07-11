import React from 'react'

function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">Portfolio</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="nav-link text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#projects" className="nav-link text-gray-700 hover:text-blue-600">Projects</a>
                    <a href="#skills" className="nav-link text-gray-700 hover:text-blue-600">Skills</a>
                    <a href="#education" className="nav-link text-gray-700 hover:text-blue-600">Education</a>
                    <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600">Contact</a>
                </div>
                <button className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
    </nav>
  )
}

export default Navbar