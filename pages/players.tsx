import React, { useState } from 'react'
import PlayerCard from '@/components/PlayerCard'
import Link from 'next/link'
import prisma from '@/utils/prisma'
import { Card } from '@/utils/interfaces'
import Head from 'next/head'

const players:React.FC<Card>= ({data}) => {
    const [query, setQuery] = useState<string>("")
    
  return (
    <div className={`bg-black h-full pb-10`}>
            <Head>
    <title>Players</title>
    <meta
  name="description"
  content="Challenger your self with clues where you get 5 different clues to guess the player"></meta>
    </Head>
        <div className='flex mt-7 items-center  md:gap-2'>
        <h1 className='text-3xl text-white font-bold mb-5 p-4'>Players:</h1> 
        <input className='p-3 h-9 mx-auto rounded-lg capitalize ' placeholder="Enter player to search for " onChange={event => setQuery(event.target.value)} />
        </div>
        <ul className='flex md:flex-row justify-center flex-wrap flex-col m-10 gap-5'>
            {
            data.filter((player) => {
                if (query === '') {
                
                  return player;
                } else if (player.Name.toLowerCase().startsWith(query.toLowerCase())||player.FamName.toLowerCase().startsWith(query.toLowerCase())) {
                  return player;
                }
              }).map((player:any)=> <Link key={player.id} href={`playerclues/${player.id}`}>
            <li><PlayerCard data={player} player={{
                  Name: '',
                  Image: '',
                  Clues: '',
                  Club: '',
                  id: 0,
                  FamName: "",
                }} players={{
                  Name: '',
                  Image: '',
                  Clues: '',
                  Club: '',
                  id: 0,
                  FamName: ''
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