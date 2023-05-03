import useSWR from 'swr'
import React from 'react'
import PlayerCard from '@/components/PlayerCard'
import Link from 'next/link'
import { getAllPlayers } from '@/utils/functions'

const players = () => {
  
    const {data,isLoading,isError}=getAllPlayers()
    
    if(isLoading) return(
        <div className='h-screen bg-black'>
        <img src="https://e0.365dm.com/22/05/2048x1152/skysports-graphic-player-premier_5770435.jpg" alt="football players loading image" />
        </div>
    )
    if(isError)return(
        <h1>this is an error{isError}</h1>
    )
    
  if(data)return (
    <div className='bg-black h-full pb-10'>
        <h1 className='text-3xl text-white font-bold mb-5 p-4'>Players:</h1>
        <ul className='flex md:flex-row justify-center flex-wrap flex-col m-10 gap-5'>
            {data.map((player:any)=> <Link key={player.id} href={`playerclues/${player.id}`}>
            <li><PlayerCard data={player} player={{
                    Name: '',
                    Image: '',
                    Clues: '',
                    Club: '',
                    id: 0
                }}></PlayerCard></li>
            </Link>)}
        </ul>
       
     
        
    </div>
  )
}

export default players