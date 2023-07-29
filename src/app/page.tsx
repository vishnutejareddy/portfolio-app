import Image from "next/image";
import TypedText from "./typedtext";

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
    </main>
  );
}
