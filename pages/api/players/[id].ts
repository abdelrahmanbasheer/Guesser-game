import prisma from '@/utils/prisma'



export default async function handle(req,res) {
    const id=req.query.id
    if(req.method==="GET"){
        const player=await prisma.player.findUnique({
            where:{id:id}
        })
        res.status(200).json(player)
    }
}