import foodItems from "@/lib/data/foodItems"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"


const SearchCarousel = () => {
  return (
   <Carousel className="w-full">
  <CarouselContent>
    {foodItems.map((item) => (
   
          <CarouselItem key={item.id}
          className="basis-1/3 md:basis-1/6 lg:basis-1/10">
            <div className="p-1 flex flex-col items-center justify-center gap-2">
            <img src={item.imgUrl} alt="" className="w-14 h-14 md:w-20 md:h-20 rounded-full"/>
            <h3>{item.name}</h3>
            </div>
          </CarouselItem>

        ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default SearchCarousel
