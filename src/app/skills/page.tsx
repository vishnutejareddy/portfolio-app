const skills = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-start">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 my-8 text-3xl tracking-wide justify-center font-extrabold leading-none hover:underline hover:underline-offset-8 hover:scale-110 hover:text-fuchsia-600">
        Skills
      </h1>
      <p className="italic tracking-wide mx-8 text-stone-700">
        Throughout my 3-year tenure as a Software Engineer, I have acquired a
        comprehensive set of industry-standard skills, including:
      </p>
      <div className="w-full h-4/5 overflow-y-scroll">
      <div className="px-8 py-4 w-full flex flex-col justify-start items-start">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-1 text-2xl font-bold tracking-tight text-bold">
          Programming Languages:
        </h3>
        <div className="py-1 w-full grid grid-cols-3 gap-x-16 gap-y-2">
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Python</p><p className="text-right">100%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-500 h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">C++</p><p className="text-right">75%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Javascript</p><p className="text-right">75%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Java</p><p className="text-right">100%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-500 h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Typescript</p><p className="text-right">75%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Go</p><p className="text-right">55%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 w-full flex flex-col justify-start items-start">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-1 text-2xl font-bold tracking-tight text-bold">
        Cloud:
        </h3>
        <div className="py-1 w-full grid grid-cols-3 gap-x-16 gap-y-2">
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">AWS</p><p className="text-right">100%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-500 h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Azure</p><p className="text-right">55%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Google Cloud</p><p className="text-right">55%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 w-full flex flex-col justify-start items-start">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-1 text-2xl font-bold tracking-tight text-bold">
        Front-End Technologies:
        </h3>
        <div className="py-1 w-full grid grid-cols-3 gap-x-16 gap-y-2">
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">HTML</p><p className="text-right">90%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-500 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">CSS</p><p className="text-right">80%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">React.js</p><p className="text-right">75%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Next.js</p><p className="text-right">75%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">TailwindCSS</p><p className="text-right">75%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Bootstrap</p><p className="text-right">55%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 w-full flex flex-col justify-start items-start">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-1 text-2xl font-bold tracking-tight text-bold">
        Tools - Frameworks, Methodologies, DevOps, OS:
        </h3>
        <div className="py-1 w-full grid grid-cols-3 gap-x-16 gap-y-2">
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Django</p><p className="text-right">90%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-500 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Jupyter Notebook</p><p className="text-right">90%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Git</p><p className="text-right">100%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Android Studio</p><p className="text-right">50%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">BitBucket</p><p className="text-right">90%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">JIRA</p><p className="text-right">100%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Docker</p><p className="text-right">60%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Linux/Unix</p><p className="text-right">50%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Agile Methodologies</p><p className="text-right">100%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 w-full flex flex-col justify-start items-start">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 my-1 text-2xl font-bold tracking-tight text-bold">
        DataBases:
        </h3>
        <div className="py-1 w-full grid grid-cols-3 gap-x-16 gap-y-2">
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">PostgreSQL</p><p className="text-right">80%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-500 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">MySQL</p><p className="text-right">60%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">SQLite</p><p className="text-right">60%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Amazon DynamoDB</p><p className="text-right">60%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Microsoft SQL Server</p><p className="text-right">60%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
          <div className="py-1 w-full grid grid-cols-2 text-sm text-stone-500 font-semibold"><p className="text-left">Amazon DocumentDB</p><p className="text-right">50%</p></div>
            <div className="bg-stone-300 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-orange-500 to-teal-700 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default skills;
