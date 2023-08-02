import Image from "next/image";
import TypedText from "./typedtext";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full flex justify-items-center">
        <div
          className="border-4 border-double border-green-600 border-spacing-8 rounded-full"
          data-aos="fade-in"
        >
          <h1 className="px-16 pt-8 bg-clip-text text-4xl text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-text text-bold">
            Vishnu Vantukala
          </h1>
          <p className="pb-8 pt-2 px-16 italic text-2xl text-red-700">
            I have experience in <TypedText />
          </p>
        </div>
      </div>
      <div className="w-full justify-between flex flex-row">
        <div className="px-8 py-8 flex flex-row self-start items-start">
          <ul className="relative border-l border-green-400 dark:border-gray-700">
            <li className="mb-20 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600 dark:text-blue-300"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-lime-600 flex items-center mb-1 text-lg font-semibold">
                M.S. Computer Software Engineering
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Arizona State University
              </time>
              
            </li>
            <li className="mb-20 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600 dark:text-blue-300"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-lime-600 flex items-center mb-1 text-lg font-semibold">
                Software Development Engineer
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Amazon
              </time>
            </li>
            <li className="mb-20 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600 dark:text-blue-300"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-lime-600 flex items-center mb-1 text-lg font-semibold">
                Software Engineer
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Telstra
              </time>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-600 dark:text-blue-300"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-lime-600 flex items-center mb-1 text-lg font-semibold">
                B.S. Electronics and Communications Engineering
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                National Institute of Technology, Warangal, India
              </time>
              
            </li>
          </ul>
        </div>
        <div className="flex flex-col self-end items-end">
          <div className="flex flex-row mx-16 my-1 border-4 border-double border-yellow-400 border-spacing-8 rounded-full">
            <div className="pl-8 pr-2 py-2">
              <Image
                className="w-4 h-8 object-cover"
                src="/asu.png"
                width={100}
                height={400}
                alt="Picture of the author"
                quality={100}
              />
            </div>
            <p className="pb-2 pt-2 pr-8 italic text-base text-red-500">
              Arizona State University
            </p>
          </div>
          <div className="mx-16 my-1 border-4 border-double border-yellow-400 border-spacing-8 rounded-full">
            <p className="pb-2 pt-2 px-8 italic text-base text-fuchsia-600">
              Degree: Master of Science
            </p>
          </div>
          <div className="mx-16 my-1 border-4 border-double border-yellow-400 border-spacing-8 rounded-full">
            <p className="pb-2 pt-2 px-8 italic text-base text-fuchsia-600">
              Major: Computer Software Engineering
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
