
import Image from "next/image";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Carousel from '@/app/components/Carousel'
import CoreCourse from "./components/CoreCourse";
import Advance from "./components/Advance";


export default function Home() {
  return (
    <>
    <Hero />
    <Hero2 />
    <Carousel/>
    <hr />
    <CoreCourse/>
    <Advance />
    </>
  );
}
