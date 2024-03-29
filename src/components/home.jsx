import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gavin White</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Data Scientist and Software Engineer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Computer Science student at York St. John University in the UK.
            I specialize in Data Science and Machine Learning using python. Currently, 
            I'm working on learning AI development and expanding my machine learning knowledge. As a semi-professional football player and avid sports enthusiast, I look for different ways to leverage data science to analyze sports performance and outcomes.  </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                  <Link to="work" smooth={true} duration={500}>View Work</Link>
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div> 
    </div>
  )
}

export default Home