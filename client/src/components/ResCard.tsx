import { Bike, IndianRupee, LocateIcon, MapPin, Star } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'

const ResCard = () => {
return (
   
    <div className="rounded-2xl shadow-xl">
      <img src="/res1.jpg" alt="res1" className="w-full  object-cover rounded-t-lg" />
      <div className='p-4'>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-1">Punjabi Junction</h3>
        <p className='text-green-600 flex items-center'><Star className='fill-green-600 w-4 h-4'/>4.3</p>
      </div>
      <div className='my-2'>
        <p className='flex items-center gap-2 text-sm font-semibold text-gray-500'><Bike width="18px"/>50-55 MINS</p>
        <p className='flex items-center gap-2 text-sm font-semibold text-gray-500'>   <MapPin width="18px"/>Ukil Para</p>
      </div>
     <div className="flex w-full flex-wrap gap-2 mt-4">
        <Badge>thali</Badge>
        <Badge>biriyani</Badge>
        <Badge>pizza</Badge>
        <Badge>rosogolla</Badge>
        
      </div>
      <div className="flex items-end justify-end mt-4">
   
      <Button className="bg-orange-600 hover:bg-orange-500">View Menu</Button>
      </div>
      </div>
    </div>
  )
}

export default ResCard
