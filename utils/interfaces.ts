type Playerclues={
    Name:string,
    Image:string,
    Clues:string,
    Club:string,
    id:number,
    FamName:string,
}

export interface Card{
    data:{
    filter(arg0: (player: Playerclues) => {}): any;
    Name:string,
    Image:string,
    Clues:string,
    Club:string,
    id:number,
    FamName:string,
    },
    player:{
        Name:string,
        Image:string,
        Clues:string,
        Club:string,
        id:number,
        FamName:string,
        },
    players:{
        [x: string]: any;
        
        Name:string,
        Image:string,
        Clues:string,
        Club:string,
        id:number,
        FamName:string,
        },


}