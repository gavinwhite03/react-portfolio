import React from 'react'
import { Link } from 'react-router-dom';
import premScraping from '../assests/premScraping.png'
import personalFinances from '../assests/personalFinances.png'
import LMS from '../assests/LMS.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl sm:text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6 font-bold text-2xl text-[#8892b0]'>Check out some of my recent work!</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
                <div
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                style={{backgroundImage: `url(${premScraping})`}}>
                
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Premier League Scraping and Predictions
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/gavinwhite03/Football-Data-Scraping'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item 2 */}
                <Link to="/whats-4-dinner">
                <div
                    style={{backgroundImage: `url(${personalFinances})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        What's 4 Dinner
                    </span>
                    <div className='pt-8 text-center'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Try It Out!
                        </button>
                    </div>
                    </div>
                </div>
                </Link>

                {/* Grid Item 3 */}
                <div
                style={{backgroundImage: `url(${personalFinances})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            What's 4 Dinner
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/gavinwhite03/whats-4-dinner'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>  
                </div>

                {/* Grid Item 4 */}
                <div
                style={{backgroundImage: `url(${LMS})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Library Management System
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://ysjcs.net/~gavin.white/Databases_Assesment/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/gavinwhite03/Library-Inventory-Management-System-'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work