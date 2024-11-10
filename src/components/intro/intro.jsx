import React from 'react';
import mylogo from '../../assets/logo.png';

function Intro() {
  return (
    <div className='bg-slate-100 py-10 lg:py-20'>
      <div className='container mx-auto px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between'>
        {/* Image Section */}
        <div className='flex-1 flex justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2'>
          <img src={mylogo} alt="Logo" className='w-64 md:w-80 lg:w-5/6' />
        </div>

        {/* Text Section */}
        <div className='flex-1 text-center md:text-left order-2 md:order-1'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-black font-bold font-mono'>
            Muhammadaziz Ravshanbekov
          </h1>
          <h2 className='text-lg md:text-xl mt-4 md:mt-2'>Software Engineer @ Google</h2>
          <p className='text-base md:text-lg mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aliquid! Numquam atque a sequi praesentium
            eos voluptates cupiditate blanditiis, ullam assumenda cum quis exercitationem sapiente sit consectetur fuga
            nam recusandae.
          </p>
          <button className="border-indigo-950 bg-indigo-900 hover:bg-transparent hover:text-indigo-950 text-white rounded-lg border-2 px-8 md:px-12 py-3 text-lg mt-7">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
