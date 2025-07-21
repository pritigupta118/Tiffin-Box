import { Bike, MapPin, Star } from 'lucide-react'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

type ResState = {
  imgUrl: string;
  name: string;
  rating: string;
  time: string;
  location: string;
  cuisines: string[];
} 
const ResCard: React.FC<ResState> = ({imgUrl,name,rating,time,location,cuisines}) => {

return (
    <div className="rounded-2xl shadow-xl">
      <img src={imgUrl} alt="res1" className="w-full  object-cover rounded-t-lg" />
      <div className='p-4'>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className='text-green-600 flex items-center'><Star className='fill-green-600 w-4 h-4'/>{rating}</p>
      </div>
      <div className='my-2'>
        <p className='flex items-center gap-2 text-sm font-semibold text-gray-500'><Bike width="18px"/>{time} MINS</p>
        <p className='flex items-center gap-2 text-sm font-semibold text-gray-500'>   <MapPin width="18px"/>{location}</p>
      </div>
     <div className="flex w-full flex-wrap gap-2 mt-4">
      {
        cuisines.map((cuisine)=>(
  <Badge>{cuisine}</Badge>
        ))
      }
      
        
      </div>
      <div className="flex items-end justify-end mt-4">
  
      <Button className="bg-orange-600 hover:bg-orange-500">
         <Link to="/restaurant/:id">View Menu</Link>
        </Button>
      </div>
      </div>
    </div>
  )
}

export default ResCard
