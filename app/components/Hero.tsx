// components/Hero.tsx
import Image from 'next/image'
import governorImage from '@/app/assets/governor.png'

const Hero = () => {
  return (
    <div className="hero bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-end py-12 px-6 lg:px-16 bg-[#F3F4F6]/80">
        {/* Hero Content */}
        <div className="hero-content h-full text-center lg:text-left lg:w-3/5 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl font-bold mt-[4rem] text-[#044E83]">Governor Sindh</h2>
          <h3 className="text-2xl lg:text-4xl font-semibold text-gray-700 mt-4">Kamran Khan Tessori</h3>
          <p className="highlight-text text-[2rem] lg:text-[2.5rem] font-semibold leading-[2.5rem] lg:leading-[3rem] text-[#2EB6E8] mt-6">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </p>
          <p className="text-lg lg:text-xl text-[1.25rem] font-extrabold text-[#044E83] mt-4">Earn up to $5,000 / month</p>
          <p className="text-lg lg:text-xl text-[1.25rem] font-extrabold text-[#044E83] mt-4">Now admissions are open in Hyderabad</p>
          <button className="apply-btn bg-[#044E83] text-white py-3 px-8 mt-8 rounded hover:bg-[#03609c] transition duration-300 text-sm lg:text-xl">
            Apply Now
          </button>
          <p className="text-sm lg:text-lg text-[#044E83] mt-6"> <span className='font-extrabold text-[#044E83] text-3xl ml-5'>562,143</span> <br/> Accepted Applications</p>
        </div>

        {/* Hero Image */}
        <div className="hero-image w-full lg:w-2/5 lg:max-w-none relative">
          <Image
            src={governorImage}
            alt="Governor Image"
            className="w-full h-auto object-cover lg:h-[500px] lg:translate-x-[30%] lg:translate-y-12 lg:mr-[-100px] lg:absolute lg:bottom-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
