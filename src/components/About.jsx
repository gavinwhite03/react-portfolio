import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8'>
                    <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div>
                    <p className='sm:text-center text-4xl font-bold'>Hi. I'm Gavin, please take a look around.</p>
                </div>
            
                <div>
                    <p className='text-left'>I am passionate about buliding software that improves the lives of others and those around me.
                    My specialty is creating exellent software for clients ranging from individual, to small businesses, and even large corporations.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About