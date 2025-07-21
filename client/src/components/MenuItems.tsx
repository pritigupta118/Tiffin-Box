import { Star } from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator';

type MenuState={
   itemName: string;
  price: string;
  rating: string;
  description: string;
  imgUrl: string;

}
const MenuItems: React.FC<MenuState> = ({itemName,price,rating,description,imgUrl}) => {
  return (
    <div>
    
      <div className='hidden md:grid grid-cols-1 gap-4 my-4'>
       <div className='flex items-center justify-between'>
        <div className=''>
           <h1 className='text-base md:text-lg font-bold text-[#262626]'>{itemName}</h1>
           <h4 className='font-semibold'>₹{price}</h4>
           
           <h4 className='text-green-800 text-sm font-bold flex items-center my-2'><Star className='fill-green-800 w-4'/>{rating}</h4>
           <p className='text-sm md:text-base text-gray-500'>{description}</p>
        </div>
       
        <img src={imgUrl} alt={itemName} className='w-32 h-28 md:w-40 object-cover md:h-36 rounded-lg'/>
       </div>
      </div>
       <Separator/>

      <div className="rounded-2xl shadow-xl my-4 md:hidden">
         <img src={imgUrl} alt="res1" className="w-full  object-cover rounded-t-lg" />
               <div className='p-4'>
     <div className="flex justify-between items-center">
     
        <h3 className="text-lg font-semibold">{itemName}
        </h3>
      <p className='text-green-600 flex items-center'><Star className='fill-green-600 w-4 h-4'/>{rating}</p>
      </div>
      <p className='text-sm text-red-600 font-medium'>₹{price}</p>
      <p className='mt-1 font-medium text-sm text-gray-500'>{description}</p>
    </div>
      </div>
    </div>
  )
}

export default MenuItems

//  <div className="rounded-2xl shadow-xl">
//       <img src={imgUrl} alt="res1" className="w-full  object-cover rounded-t-lg" />
//       <div className='p-4'>
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-semibold mb-1">{itemName}</h3>
//         <p className='text-green-600 flex items-center'><Star className='fill-green-600 w-4 h-4'/>{rating}</p>
//       </div>

//     </div>