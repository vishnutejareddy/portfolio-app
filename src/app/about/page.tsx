import Image from "next/image";
import Link from 'next/link';

const about = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-8 text-3xl justify-center font-extrabold leading-none tracking-tight hover:underline hover:underline-offset-8 hover:scale-110 hover:text-teal-600">
        About
      </h1>
      <p className="italic tracking-wide mx-8 text-stone-700">
        Results-driven Computer Software Engineering Grad student with 3+ years
        of experience in full-stack development, object-oriented programming,
        and cloud-based microservices. Proficient in Agile Methodology, CI/CD
        pipeline, Natural Language Processing, Web Development, and API
        Development. Seeking full-time opportunities starting May 2024.
      </p>
      <div className="px-8 py-4">
        <h3 className="italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-1 text-2xl justify-center font-bold tracking-tight text-bold">
          Software Engineer:
        </h3>
        <p className="text-stone-700">
          Software Development Engineer at Amazon for 1.2 years and Software
          Engineer at Telstra for 2 years
        </p>
      </div>
      <div className="px-8 py-4 flex flex-row w-full items-center justify-start">
        <Image
          className="w-48 h-48 rounded-lg object-cover hover:scale-110 hover:brightness-110"
          src="/vishnu.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          quality={100}
        />
        <div className="px-8 py-8 ml-8 flex flex-col items-center justify-start tracking-wide">
          <ul className="text-stone-700 text-base leading-6">
            <li>
              <p
                className="group flex items-start bg-gradient-to-r bg-clip-text  text-transparent 
                            from-pink-500 to-violet-500
                             text-lg underline underline-offset-4 text-bold"
              >
                Contact Details:
              </p>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  Phone
                </p>
                : +1 (480)-764-8905
              </div>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  City
                </p>
                : Phoenix, AZ, USA
              </div>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  Email
                </p>
                : vvantuka@asu.edu
              </div>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  Portfolio
                </p>
                : https://vishnuvantukala.com
              </div>
            </li>
          </ul>
        </div>
        <div className="px-8 py-8 ml-8 flex flex-col items-center justify-start">
          <ul className="text-stone-700 text-base leading-6">
            <li>
              <p
                className="group flex items-start bg-gradient-to-r bg-clip-text  text-transparent 
                            from-pink-500 to-violet-500
                             text-lg text-bold"
              >
                Education:
              </p>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  University
                </p>
                : Arizona State University
              </div>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  Major
                </p>
                : Computer Software Engineering
              </div>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  Degree
                </p>
                : Master of Science
              </div>
            </li>
            <li>
              <div className="group flex items-start py-1 text-slate-700 dark:text-slate-600">
                <svg
                  width="3"
                  height="24"
                  viewBox="0 -9 3 24"
                  className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 animate-text text-bold">
                  Graduation
                </p>
                : Expected December 2023
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-8 py-4 flex-row w-full items-center justify-start">
        <p className="text-stone-500 text-sm tracking-wide font-semibold">
          As an accomplished competitive coder, I have successfully solved over
          1000 coding problems across renowned platforms such as LeetCode,
          GeeksforGeeks, HackerRank, and HackerEarth.
        </p>
        <div className="py-8 flex flex-row justify-start items-center">
          <div className="mx-2 px-2 basis-1/4 border-4 border-double flex flex-row items-center border-teal-600 border-spacing-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="purple"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <div className="px-2 font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-800">
                300+
            </div>
            <div className="text-stone-600 font-semibold">
                problems on {' '}
                <Link href='https://leetcode.com/VishnuVantukala/' target='_blank' className="underline hover:scale-110 text-sky-500">Leetcode</Link>
            </div>
          </div>
          <div className="mx-2 px-2 basis-1/4 border-4 border-double flex flex-row items-center border-teal-600 border-spacing-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="purple"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <div className="px-2 font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-800">
                390+
            </div>
            <div className="text-stone-600 font-semibold">
                problems on {' '}
                <Link href='https://auth.geeksforgeeks.org/user/vishnured12' target='_blank' className="underline hover:scale-110 text-emerald-500">GeeksforGeeks</Link>
            </div>
          </div>
          <div className="mx-2 px-2 basis-1/4 border-4 border-double flex flex-row items-center border-teal-600 border-spacing-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="purple"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <div className="px-2 font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-800">
                250+
            </div>
            <div className="text-stone-600 font-semibold">
                problems on {' '}
                <Link href='https://www.hackerrank.com/vishnuteja12' target='_blank' className="underline hover:scale-110 text-amber-500">Hackerrank</Link>
            </div>
          </div>
          <div className="mx-2 px-2 basis-1/4 border-4 border-double flex flex-row items-center border-teal-600 border-spacing-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="purple"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <div className="px-2 font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-800">
                580+
            </div>
            <div className="text-stone-600 font-semibold">
                problems on {' '}
                <Link href='https://www.hackerearth.com/@12vis7' target='_blank' className="underline hover:scale-110 text-fuchsia-600">Hackerearth</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
