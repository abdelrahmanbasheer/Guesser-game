import useSWR from 'swr'
import React from 'react'
import PlayerCard from '@/components/PlayerCard'
import Link from 'next/link'
import { getAllPlayers } from '@/utils/function'
import {  PrismaClient } from '@prisma/client'

const players = ({data}) => {
  return (
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
export async function getStaticProps() {
    const prisma = new PrismaClient()
    const data=await prisma.player.findMany()
    
    
    return{
        props:{data}
    }
}