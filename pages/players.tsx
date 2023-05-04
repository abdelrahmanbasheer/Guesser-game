import React, { useState } from 'react'
import PlayerCard from '@/components/PlayerCard'
import Link from 'next/link'
import prisma from '@/utils/prisma'

const players = ({data}) => {
    const [query, setQuery] = useState<string>("")
  return (
    <div className={`bg-black h-full pb-10`}>
        <div className='flex mt-7 items-center  md:gap-2'>
        <h1 className='text-3xl text-white font-bold mb-5 p-4'>Players:</h1> 
        <input className='p-3 h-9 mx-auto rounded-lg capitalize ' placeholder="Enter player to search for " onChange={event => setQuery(event.target.value)} />
        </div>
        <ul className='flex md:flex-row justify-center flex-wrap flex-col m-10 gap-5'>
            {
            data.filter((player: { Name: string }) => {
                if (query === '') {
                  return player;
                } else if (player.Name.toLowerCase().includes(query.toLowerCase())) {
                  return player;
                }
              }).map((player:any)=> <Link key={player.id} href={`playerclues/${player.id}`}>
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
export async function getStaticProps() {
    const data=await prisma.player.findMany()
    
    return{
        props:{data}
    }
}