import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <div className="flex flex-col justify-between ml-6 lg:flex lg:flex-row lg:mx-40 gap-10 mr-4">
          <h1 className="mt-10 leading-snug text-6xl font-bold lg:text-8xl lg:max-w-lg lg:leading-snug lg:w-1/2">
            About{" "}
            <span className="bg-emerald-400 py-1 px-2 rounded-md mt-2">Us</span>
          </h1>
          <div className="flex flex-col justify-between lg:flex lg:gap-10 lg:align-middle lg:mb-10 lg:mt-80">
          <p className="text-lg lg:text-2xl font-bold lg:max-w-4xl lg:mr-24 lg:leading-relaxed mb-10 lg:mb-1">
          Build is on a mission to empower charities, revolutionising how they harness 
          technology. We're a platform that connects charities with a community of skilled developers.
            </p>
            <p className="text-lg lg:text-2xl font-bold lg:max-w-4xl lg:mr-24 lg:leading-relaxed ">
              As bootcamp graduates ourselves, we realised there was a gap in
              the market. Charities often face challenges in establishing or
              maintaining their online presence. Meanwhile, our talented peers
              from the bootcamp seek real-world experience. With a dedicated
              pool of experienced mentors to lead projects, Build was created to
              bridge this gap and leverage technology for charitable causes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
