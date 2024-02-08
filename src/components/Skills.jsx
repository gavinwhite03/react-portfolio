import React from 'react'
import GitHub from '../assests/github.png'
import Python from '../assests/python.png'
import html from '../assests/html.png'
import js from '../assests/javascript.png'
import sql from '../assests/sql.png'
import React2 from '../assests/react.png'
import css from '../assests/css.png'
import Csharp from '../assests/Csharp.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div>
                <p className='text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4 font-bold text-2xl text-[#8892b0]'>These are the languages I've worked with -</p>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='HTML Icon' />
                    <p className='my-4 text-center'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='GitHub Icon' />
                    <p className='my-4 text-center'>GitHub</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Python Icon' />
                    <p className='my-4 text-center'>Python</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt='JavaScript Icon' />
                    <p className='my-4 text-center'>JavasScript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={sql} alt='sql Icon' />
                    <p className='my-4 text-center'>SQL</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={React2} alt='React Icon' />
                    <p className='my-4 text-center'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='CSS Icon' />
                    <p className='my-4 text-center'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Csharp} alt='C# Icon' />
                    <p className='my-4 text-center'>C#</p>
                </div>
            </div>
            

        </div>
       
    </div>
  )
}

export default Skills