import React from 'react';
import { IconContext } from 'react-icons';
import { GrFormNext } from 'react-icons/gr'
import { FaBeer } from 'react-icons/fa'

const SuccessStories = () => {
    const storiesData = [
        {
            _id: 1,
            image: "https://i.ibb.co/bRS24RD/github.webp",
        },
        {
            _id: 2,
            image: "https://i.ibb.co/bRS24RD/github.webp",
        },
        {
            _id: 3,
            image: "https://i.ibb.co/bRS24RD/github.webp",
        },
        {
            _id: 4,
            image: "https://i.ibb.co/bRS24RD/github.webp",
        },
    ]
    return (
        <div className='mt-3 max-w-5xl mx-auto relative'>
            <h1 className='my-7 text-3xl font-semibold'>Successful Stories</h1>
            <div className='flex gap-3 items-center mb-4'>
                {
                    storiesData.map(data => (
                        <div
                            key={data._id}
                            className='w-full bg-[#2D6B5A] rounded-tl-3xl rounded-br-3xl'>
                            <img src={data.image} alt="demo" />
                        </div>
                    ))
                }
            </div>
            <div className='absolute bottom-0-0 right-0 text-white'>
                <button className='text-right bg-[#2D6B5A] p-2 rounded-tl-lg rounded-br-lg'><span>More Stories <GrFormNext className='inline-block' color="white"/></span></button>
            </div>
            <IconContext.Provider
                value={{ color: 'blue', size: '50px' }}
            >
                <div>
                    <FaBeer />
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default SuccessStories;