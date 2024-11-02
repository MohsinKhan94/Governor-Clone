import Image from "next/image";

const Advance = () => { 
  return (
    <div className="flex flex-col items-center lg:items-start py-[1rem] lg:px-20 px-7">
      {/* Heading */}
      <h1 className="lg:text-4xl mb-5 sm:text-4xl text-2xl font-extrabold text-[#044E83] lg:text-left text-center">
        Advance Course
      </h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
        {/* First Image */}
        <div className="overflow-hidden shadow-xl h-fit  rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/a1.jpg"
              alt="Programming Fundamentals"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover shadow-xl w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Programming Fundamentals</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="overflow-hidden shadow-xl h-fit  rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/a2.jpg"
              alt="Web2 Using NextJS"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Web2 Using NextJS</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="overflow-hidden shadow-xl h-fit  rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/a3.jpg"
              alt="Earn As You Learn"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Earn As You Learn</p>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="overflow-hidden shadow-xl h-fit  rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/a4.jpg"
              alt="Advanced Topics"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Advanced Topics</p>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="overflow-hidden h-fit shadow-xl rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/a5.jpg"
              alt="Advanced Topics"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Advanced Topics</p>
          </div>
        </div>

        {/* Sixth Image */}
        <div className="overflow-hidden h-fit shadow-xl rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/a6.jpg"
              alt="Advanced Topics"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Advanced Topics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advance;
