import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req:any,res:any) {
    if(req.method==="GET"){
        const player=await prisma.player.findMany()
        res.status(200).json(player)
    }
}