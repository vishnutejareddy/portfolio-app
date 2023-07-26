import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
  
    return (
      <div className="bg-gradient-to-b from-slate-900 to-slate-600 flex flex-col h-screen w-64 bg-gray-900">
        <div className="flex items-center justify-center py-4">
          <div
            className="transition ease-in-out bg-gray-600 rounded-full border-4 hover:border-emerald-600 border-fuchsia-900 shadow-lg hover:shadow-2xl overflow-hidden hover:scale-110"
          >
            <Image
                className="w-36 h-36 object-cover hover:brightness-110"
                src="/vishnu_preview.png"
                width={500}
                height={500}
                alt="Picture of the author"
                quality={100}
            />
          </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='text-cyan-500 hover:text-fuchsia-600 text-center text-lg font-semibold font-mono'>Vishnu Vantukala</p>
        </div>
        <div className='flex items-center justify-center px-8 mt-4 mb-1'>
            <Link
            href='https://github.com/vishnutejareddy' target='_blank'
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 mx-2 hover:scale-110 inline-block rounded-full px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#333]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            </Link>
            <Link
            href='https://www.linkedin.com/in/vishnu-teja-reddy-8819a5181/' target='_blank'
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 mx-2 hover:scale-110 inline-block rounded-full px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#0077b5]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            </Link>
        </div>
        <nav className="flex items-start justify-center">
          <ul className="justify-center space-y-2 py-4 px-8">
            <li className="transition ease-in-out border-none rounded-md text-base hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  border-2 hover:border-blue-300 text-center text-gray-300 hover:text-white px-8 py-1">
            <Link className="flex justify-center" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p className="ml-2">Home</p>
            </Link>
            </li>
            <li className="transition ease-in-out border-none rounded-md text-base hover:-translate-y-1 hover:scale-110 hover:bg-green-500 border-2 hover:border-green-300 text-center text-gray-300 hover:text-white px-8 py-1">
            <Link className="flex justify-center" href="/about">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            <p className="ml-2">About</p>
            </Link>
            </li>
            <li className="transition ease-in-out border-none rounded-md text-base hover:-translate-y-1 hover:scale-110 hover:bg-red-500 border-2 hover:border-red-300 text-center text-gray-300 hover:text-white px-8 py-1">
            <Link className="flex justify-center" href="/skills">    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <p className="ml-2">Skills</p>
            </Link>
            </li>
            <li className="transition ease-in-out border-none rounded-md text-base hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 border-2 hover:border-yellow-300 text-center text-gray-300 hover:text-white px-8 py-1">
            <Link className="flex justify-center" href="/resume">    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <p className="ml-2">Resume</p>
            </Link>
            </li>
            <li className="transition ease-in-out border-none rounded-md text-base hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 border-2 hover:border-pink-300 text-center text-gray-300 hover:text-white px-8 py-1">
            <Link className="flex justify-center" href="/">    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
                <p className="ml-2">Projects</p>
            </Link>
            </li>
          </ul>
        </nav>
      </div>
  
  );
};

export default Navbar;
