import React from 'react'

const Navbar = ({ activeSection, sectionRefs }) => {
    const navItems = ['about' ,'projects' , 'skills' , 'contact'];
    return (
        <nav className="flex  justify-center md:justify-between items-center py-6 px-32 bg-[#00000046] sticky top-0 z-90 backdrop-blur-md ">
            <div className='flex-col justify-center items-center'>
                <h1 className="text-5xl font-bold">Welcome</h1>
                <h6>to the World of Creativity</h6>
            </div>
            <ul className="hidden md:flex space-x-6 text-xl">
                {navItems.map((item) => (
                    <li
                        key={item}
                        className={`cursor-pointer hover:text-pink-500 ${activeSection === item ? 'border-b-2 border-pink-500 pb-1 font-bold duration-200' : ''
                            }`}
                        onClick={() =>
                            sectionRefs[item].current.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
