import React from 'react'
import { Card } from '@/utils/interfaces'
import Image from 'next/image'

const PlayerCard = ({data}:Card) => {

  return (
    <div className='bg-gray-900 flex rounded-3xl md:w-[400px] vs:w-[] w-[300px] overflow-hidden  p-4 relative'>
      <Image src={data.Image} alt={data.Name} className='vs:w-[130px]  w-[100px] h-[100px] rounded-full' width={130} height={100}  loading='lazy' blurDataURL={data.Image}/>
      <ul className='text-white font-semibold flex-col m-4'>
        <li><p><span className='text-green-500'>Name: </span>{data.Name}</p></li>
        <li><p><span className='text-green-500'>Famous Club: </span> {data.Club}</p></li>
      </ul>
    </div>
  )
}

export default PlayerCard