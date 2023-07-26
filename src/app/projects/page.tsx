import Link from 'next/link';

const projects = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500 my-8 text-3xl justify-center font-extrabold leading-normal tracking-wide hover:underline hover:underline-offset-8 hover:scale-110 hover:text-amber-700">
        Projects
      </h1>
      <p className="italic px-8 text-stone-500 text-sm tracking-wide font-semibold">
        In these projects, I applied my expertise in full-stack development,
        machine learning, and natural language processing. Through the virtual
        mouse control project, I demonstrated my ability to combine machine
        learning techniques with computer vision to create innovative solutions.
        Additionally, the chatbot project showcased my proficiency in designing
        and developing machine learning-powered applications that address
        practical programming needs.
      </p>
      <div className="px-8 py-8 flex flex-row">
        <ul className="relative border-l border-green-400 dark:border-gray-700">
          <li className="mb-5 ml-6">
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
            Virtual Mouse Control using Hand Gesture Recognition{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Undergrad Project, Spring 2019
            </time>
            <ul className="list-disc px-4 mb-4 text-sm font-normal text-stone-500 dark:text-gray-400">
            <li>Developed a method for on-screen cursor control using machine learning models and techniques like Contour detection and Convex Hull Identification.</li>
            <li>Presented and published a paper accepted by IEEEHYDCON Conference - <Link href="https://ieeexplore.ieee.org/document/9242677" className='underline text-blue-500'>https://ieeexplore.ieee.org/document/9242677</Link></li>
            </ul>
          </li>
          <li className="mb-5 ml-6">
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
            Chatbot for Programmers (ML Application)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Class Project, Fall 2022
            </time>
            <ul className="list-disc px-4 mb-4 text-sm font-normal text-stone-500 dark:text-gray-400">
            <li>Created a chatbot exposed as an API for programming-related questions.</li>
            <li>Utilized data from technical knowledge-sharing sites such as Stack Overflow and Tutorialspoint for training data.</li>
            <li>A recurrent neural network (RNN) model with an LSTM (Long Short-Term Memory) layer is used as the ML model.</li>
            </ul>
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
            Mobile Application Development
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Grad Project, Spring 2023
            </time>
            <ul className="list-disc px-4 mb-4 text-sm font-normal text-stone-500 dark:text-gray-400">
            <li>Created mini mobile applications as part of “SER 423: Mobile Systems” ranging from UI functionalities to Location services.</li>
            <li>Used Expo and Java, react-native for Android development and Swift, Xcode for IOS App development</li>
            <li>Built robust and user friendly applications using native code with Javascript (ES6) at front-end and java/Swift for backend.</li>
            </ul>
          </li>
        </ul>
        <ul className="relative border-l border-green-400 dark:border-gray-700">
          <li className="mb-5 ml-6">
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
            Programming Language Design{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Grad Project, Spring 2023
            </time>
            <ul className="list-disc px-4 mb-4 text-sm font-normal text-stone-500 dark:text-gray-400">
            <li>Developed a programming language with custom syntax as part of course project for “Programming paradigms” course.</li>
            <li>Used lexical analyzer to generate tokens, parser to generate parse tree, and PROLOG as interpreter and compiler.</li>
            </ul>
          </li>
          <li className="mb-5 ml-6">
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
            Advanced Encryption Standard
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Undergrad Project, Fall 2019
            </time>
            <ul className="list-disc px-4 mb-4 text-sm font-normal text-stone-500 dark:text-gray-400">
            <li>Developed a block cipher in c++ based on Advanced Encryption Standard (AES) by NIST.</li>
            <li>A real-time chat application with TCP/IP communication encrypted with AES, supporting simultaneous connections and multi-threaded message processing is developed.</li>
            <li>The C++ code has been tested in the Institute by transmitting the encrypted data between multiple servers and decrypted</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default projects;
