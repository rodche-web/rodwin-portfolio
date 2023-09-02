import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-700 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-8">
                    <h3 className="font-bold text-lg mb-4">About</h3>
                    <p className="text-sm">This is a portfolio web page that showcases the projects of Rodwin Espiritu. It is built using the React.js framework.</p>
                </div>
                <div className="w-full md:w-1/3 mb-8"></div>
                <div className="w-full md:w-1/3 mb-8">
                    <h3 className="font-bold text-lg mb-4">Contact</h3>
                    <p className="text-sm">rodwinchestermail@gmail.com</p>
                    <p className="text-sm">09463106332</p>
                </div>
                </div>
                <div className="text-center text-sm mt-8">
                <p>&copy; {currentYear} Rodwin Chester Espiritu. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer