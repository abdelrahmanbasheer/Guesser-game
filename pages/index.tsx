import Hero from '@/components/Hero'
import  Head  from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
    <title>Clues</title>
    <meta
  name="description"
  content="Challenger your self with clues where you get 5 different clues to guess the player"></meta>
    </Head>
   <main className=''>
    <Hero></Hero>

   </main>
   </>
  )
}
