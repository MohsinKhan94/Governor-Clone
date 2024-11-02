import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <Carousel className="flex justify-center items-center"> {/* Center the carousel */}
      <CarouselContent className="flex justify-center items-center"> {/* Center the carousel content */}
        <CarouselItem className="flex justify-center"> {/* Center each carousel item */}
          <Image
            src="/cr1.jpg"
            alt="Image 1 description"
            width={800} // Adjust width
            height={600} // Adjust height
            className="object-cover" // Optional: make the image cover its container
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            src="/cr2.jpg"
            alt="Image 2 description"
            width={800}
            height={600}
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            src="/cr3.jpg"
            alt="Image 3 description"
            width={800}
            height={600}
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center mb-5">
          <Image
            src="/cr4.jpg"
            alt="Image 4 description"
            width={800}
            height={600}
            className="object-cover"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            src="/cr5.jpg"
            alt="Image 5 description"
            width={800}
            height={600}
            className="object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" /> {/* Optional positioning */}
      <CarouselNext className="absolute right-4" /> {/* Optional positioning */}
    </Carousel>
    
  );
}
