import {useState} from 'react'

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown)
  }
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium"><a href="#hero">Rodwin</a></h1>
            <div>
                <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8" onClick={toggleMenu}>
                    <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
                </button>
                <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
                    <a href="#about" className="hover:opacity-90">About</a>
                    <a href="#projects" className="hover:opacity-90">Projects</a>
                </nav>
            </div>
        </section>
        <section id="mobile-menu" className={`absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu ${isMenuShown ? 'flex' : 'hidden'}`} onClick={toggleMenu}>
            <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                <a href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</a>
                <a href="#about" className="w-full text-center py-6 hover:opacity-90">About</a>
                <a href="#projects" className="w-full text-center py-6 hover:opacity-90">Projects</a>
            </nav>
        </section>
    </header>
  )
}

export default Header