"use client";
import Link from "next/link";
import Image from 'next/image';

export default function Charity() {
  return (
    <div className="flex flex-col justify-between">
      <div className="lg:mx-40 ml-6">
        <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-3xl lg:leading-snug lg:w-1/2">
          How it {" "}
          <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">
            works
          </span>
        </h1>
        <div className="mt-10 flex flex-col justify-between lg:flex lg:flex-row-reverse lg:align-bottom lg:w-4/5">
          <p className="text-4xl font-bold mb-10 lg:max-w-2xl lg:mr-24 lg:leading-relaxed">
            Building Websites, Transforming Lives with Every Line of Code
          </p> 
          <div><Image
      src="/how-it-works-desktop.svg"
      width={556}
      height={655}
      alt="How it works diagram"
    /></div>
          <button className="button mr-20 bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-10">
            <Link href={"/charity/register"}>Join us</Link>{" "}
          </button>
          
        </div>
      </div>
    </div>

  );
}
