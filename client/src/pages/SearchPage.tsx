import ResCard from '@/components/ResCard'
import SearchCarousel from '@/components/SearchCarousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'


const SearchPage = () => {
  return (
    <>

      <div className='max-w-7xl mx-auto p-8'>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-lg md:text-2xl text-gray-500'>What's on your mind today ?</h1>
          <Button variant={"link"}>Reset</Button>
          </div>
          <SearchCarousel />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-6">
          <h1 className="font-medium text-lg">
            (0) Search result found
          </h1>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {["biriyani", "dosa", "Momo"].map(
              (selectedFilter: string, idx: number) => (
                <div
                  key={idx}
                  className="relative inline-flex items-center max-w-full"
                >
                  <Badge
                    className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap"
                    variant="outline"
                  >
                    {selectedFilter}
                  </Badge>
                  <X

                    size={16}
                    className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-center mt-8">
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
          <ResCard />
        </div>
      </div>
    </>
  )
}

export default SearchPage
