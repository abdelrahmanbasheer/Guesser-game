import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '@/utils/interfaces'
import { getPlayer } from '@/utils/functions'
import LoadingSpinner from '@/components/LoadingSpinner'
import Image from 'next/image'
const PlayerClues = () => {
  const router=useRouter()
  const {id}=router.query
      const fetchPlayer=getPlayer(id)
    if(fetchPlayer.isLoading) return(
        <div className='h-screen bg-black'>
        <LoadingSpinner></LoadingSpinner>
        </div>
    )
    if(fetchPlayer.isError)return(
        <h1>this is an error{fetchPlayer.isError}</h1>
    )
    const {data}=fetchPlayer as unknown as Card  
    let para=data.Clues
    const newPara=para.split(".").map(str => <p key={str}>{str}</p>);
  if(data)
  console.log(data?.Name)
  return(
    <div className='bg-black h-screen pb-20 flex flex-col items-center justify-center '>
      <div className='w-[500px]'>
      <Image src={data.Image} className=" w-[400px] ml-12 mt-10 rounded-2xl"  alt=""  loading='lazy'/>
      <p className='text-3xl  pl-7 text-white mt-5'><span className='text-green-500'>Name: </span>{data.Name}</p>
      {/* <img src="https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png" className='w-[150px]' alt="" /> */}
      <p className='text-3xl pl-7 text-white  mt-5 flex gap-2'><span className='text-green-500'>famous Club: </span>{data.Club} </p>
      <h1 className='text-white pl-7 mt-5 text-3xl'>Clues:</h1>
      <p className='text-white pl-7 '>{newPara}</p>
  
      </div>
    </div>
  )
    
  
}

export default PlayerClues