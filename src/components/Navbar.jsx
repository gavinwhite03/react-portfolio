import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '150px', height: 'auto'}}/>
        </div>
        {/* menu */}
        <div className='flex-grow'></div>
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li className='mx4'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='mx4'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 absolute top-4 right-0 mt-4 mr-4'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
            </li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='fixed flex-col top-[35%] left-0'>
    <ul>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/in/gavin-white-40280a20a/">
                Linkedin <FaLinkedin size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
            </a>
        </li>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/gavinwhite03">
                GitHub <FaGithub size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
            </a>
        </li>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#70c26f]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="mailto: gavin0314@gmail.com">
                Email <HiOutlineMail size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
            </a>
        </li>
        <li className='w-[80px] lg:w-[160px] h-[40px] lg:h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="src\assests\Gavin White CV 2023.pdf">
                Resume <BsFillPersonLinesFill size={30} className='mr-[-10px] lg:mr-0 duration-300'/>
            </a>
        </li>
    </ul>
        </div>

    </div>
  )
}

export default Navbar