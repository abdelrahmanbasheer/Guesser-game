import  useSWR  from "swr"

export function getPlayer(id){
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const {data,isLoading,error}=useSWR(`/api/players/${id}`,fetcher,{revalidateOnMount:false,revalidateOnFocus:false,revalidateIfStale:false,})

    return {
        data: data,
        isLoading,
        isError: error
      }

}
export function getAllPlayers(){
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const {data,error,isLoading}=useSWR('/api/players',fetcher)
    return {
        data: data,
        isLoading:isLoading,
        isError: error
      }
}