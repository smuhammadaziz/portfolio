import React from 'react';
import mylogo from '../../assets/logo.png';

function Intro() {
  return (
    <div className='bg-slate-100 py-10'>
      <div className='container mx-auto px-40 flex items-center justify-between '>
        <div className='flex-1'>
          <h1 className='text-6xl text-black font-bold font-mono'>Muhammadaziz Ravshanbekov</h1>
          <h2 className='text-xl mt-2'>Google </h2>
          <h2 className='text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aliquid! Numquam atque a sequi praesentium eos voluptates cupiditate blanditiis, ullam assumenda cum quis exercitationem sapiente sit consectetur fuga nam recusandae.</h2>
          <button className="border-indigo-950 bg-indigo-900 hover:bg-transparent    hover:text-indigo-950 text-white rounded-lg border-2 px-12 py-3 text-lg mt-7">About Me</button>
        </div>
        <div className='flex-1 flex justify-end'>
          <img src={mylogo} alt="Logo" width="550" className='' />
        </div>
      </div>
    </div>
  );
}

export default Intro;
