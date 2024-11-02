import Image from "next/image";

const CoreCourse = () => {
  return (
    <div className="flex flex-col lg:items-start items-center py-[5rem] lg:px-20 px-7">
      {/* Heading */}
      <h1 className="lg:text-4xl mb-5 sm:text-4xl text-2xl font-extrabold text-[#044E83] lg:text-left text-center">
        Core Courses Sequence
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {/* First Image */}
        <div className="shadow-xl overflow-hidden h-fit  rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full ">
            <Image
              src="/core1.jpg"
              alt="Programming Fundamentals"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl shadow-xl object-cover w-full transition-transform duration-300 hover:scale-105"
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
              src="/core2.jpg"
              alt="Web2 Using NextJS"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Web2 Using NextJS</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="overflow-hidden shadow-xl h-fit srounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src="/core3.jpg"
              alt="Earn As You Learn"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-[#52525b] text-center">Earn As You Learn</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default CoreCourse;
