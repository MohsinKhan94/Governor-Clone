import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="font-semibold sm:text-3xl mt-1 text-[#044E83] leading-[2.5rem] text-[36px] title-font mb-4">
              Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
            </h1>
            <p className="font-semibold">
              The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* First Image */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover"
                  src="/img1.jpg"
                  height={400}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0"></div>
              </div>
            </div>
            {/* Second Image */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover"
                  src="/img2.jpg"
                  height={400}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0"></div>
              </div>
            </div>
            {/* Third Image */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover"
                  src="/img3.jpg"
                  height={400}
                  width={400}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
