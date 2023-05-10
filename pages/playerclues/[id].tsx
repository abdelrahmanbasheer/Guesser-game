import React from 'react'
import { Card } from '@/utils/interfaces'
import LoadingSpinner from '@/components/LoadingSpinner'
import Image from 'next/image'
import prisma from '@/utils/prisma'
const PlayerClues = ({data}:Card) => {
    let para=data?.Clues
    const newPara=para?.split(".").map(str => <p key={str}>{str}</p>);
  // if(!data)
  // return(
  //   <LoadingSpinner></LoadingSpinner>
  // )
 
  return(
    
    <div className='bg-black   pb-20 flex flex-col items-center justify-center '>
      <div className='h-[180vh]'>
      <Image src={data?.Image} className=" w-[400px] md:w-[700px] p-4 rounded-3xl mt-10 md:ml-12  " height={0}  width={400}  alt="player image"  />
      <p className='text-3xl  pl-7 text-white mt-5'><span className='text-green-500'>Name: </span>{data?.Name}</p>
      {/* <img src="https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png" className='w-[150px]' alt="" /> */}
      <p className='text-3xl pl-7 text-white  mt-5 flex gap-2'><span className='text-green-500'>famous Club: </span>{data?.Club} </p>
      <h1 className='text-white md:pl-7 p-5 mt-5 text-3xl'>Clues:</h1>
      <p className='text-white md:pl-7 p-7'>{newPara}</p>
      <button className='text-green-600 p-2 bg-black rounded-full' onClick={()=>window.location.reload()}>Refresh</button>
  
      </div>
    </div>
  )
    
  
}

export default PlayerClues
export async function getStaticPaths() {
  const res= await prisma.player.findMany()
  const path = res.map((player)=>
  {
    return{
      params:{
        id:`${player.id}`
      }
    }
  }

  )
  return{
    paths:path,
    fallback:true,
  }
 
}
export async function getStaticProps({params}) {
  const data=await prisma.player.findUnique({
    where:{id:params.id}
})
  return{
      props:{data}
  }
}