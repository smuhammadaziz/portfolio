import React, { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className=" block py-4 ">
      <div className="container mx-auto px-40  flex justify-between text-center items-center">
      <div>
        <a href="#" className="text-black text-3xl font-bold font-sans text-indigo-900 hover:text-indigo-950">Muhammadaziz</a>
      </div>
      <ul className="flex ">
        <li className="mx-4 text-lg text-slate-700 hover:underline hover:cursor-pointer  ">About</li>
        <li className="mx-4 text-lg text-slate-700 hover:underline hover:cursor-pointer  ">Skills</li>
        <li className="mx-4 text-lg text-slate-700 hover:underline hover:cursor-pointer  ">Projects</li>
        <li className="mx-4 text-lg text-slate-700 hover:underline hover:cursor-pointer  ">Achievements</li>
        <li className="mx-4 text-lg text-slate-700 hover:underline hover:cursor-pointer  ">Contact</li>
        <li className="mx-4 text-lg text-slate-700 hover:underline hover:cursor-pointer  ">Resume</li>

      </ul>
      <div>
        <button className="border-indigo-950 bg-indigo-900 hover:bg-white hover:text-indigo-950 text-white rounded-lg border-2 px-7 py-2 ">Contact</button>
      </div>
      </div>
    </header>
  );
}

export default Header;
