import ResCard from '@/components/ResCard'
import SearchCarousel from '@/components/SearchCarousel'


const SearchPage = () => {
  return (
    <>
   
    <div className='max-w-7xl mx-auto p-8'>
      <div className='flex flex-col gap-8'>
      <h1 className='font-semibold text-lg md:text-2xl text-gray-500'>What's on your mind today ?</h1>
      <SearchCarousel/>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-center mt-8">
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
      </div>
    </div>
    </>
  )
}

export default SearchPage
