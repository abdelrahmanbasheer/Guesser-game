import LoadingSpinner from "@/components/LoadingSpinner";
import { getPlayer } from "@/utils/function";
import { Card } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import { CustomPlaceholder } from "react-placeholder-image";
const Singleplayer = () => {
  const [id, setId]           = useState<number>();
  const [counter, setCounter] = useState<number>(1);
  const [answers, setAnswers] = useState<number>(5);
  const [input, setInput]     = useState<string>("");
  const [result, setResult]   = useState<boolean | string>();
  const [res, setRes] = useState<boolean>(false)

  useEffect(() => {
    randomId();
  }, []);

  function randomId() {
    const tempId = Math.floor(Math.random() * 80) + 1;
    setId(tempId);
  }
  const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value)

  }
  function handleSubmit() {
    let splitFamName=data.FamName.split("")
    let splitName=    data.Name.split("")
    let splitInput=   input.split("")
    let counter=0
    let inputcouter=0
    if(splitFamName.length>=6){
      inputcouter=3
    }
    if(splitFamName.length>=9){
      inputcouter=4
    }
    if(splitFamName.length<=4){
      inputcouter=2
    }
    if (input.toLowerCase().trim() === data.Name.toLowerCase().trim()||input.toLowerCase().trim() === data.FamName.toLowerCase().trim()){
      setResult("true");
      setInput("");
    } else if (input.length<=splitFamName.length+1){
    for(let i=0;i<splitFamName.length;i++){
      if(splitFamName[i]!=splitInput[i]){
          counter++
      }
  }
  if(counter<=inputcouter){
    setResult("true");
    setInput("");
    setRes(true)
  }else{
  setResult("false")

  }
   }
    else{
      setResult("false")
     
    }
  }
  const handleClickScroll = () => {
    const element = document.getElementById('p-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //fetching 
  const fetchPlayer = getPlayer(id);
  const { data } = fetchPlayer as unknown as Card;

  if(fetchPlayer.isLoading) return(
    <div className='h-screen bg-black'>
    <LoadingSpinner></LoadingSpinner>
    </div>
)
  if (fetchPlayer.isError)
    return <h1>this is an error{fetchPlayer.isError}</h1>;
  if (data) {
    let para = data?.Clues;
    const newPara = para
      .split(".")
      .slice(0, counter)
      .map((str, index) => <p key={index} className="fade-in-text">{str}</p>);
    return (
      <div className="h-[180vh] bg-black text-center lg:py-[10%] py-[25%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            className="m-2"
            type="text"
            value={input}
            onChange={(e) => 
              handleChange(e)}
          />
          <input
            type="submit"
            className=" lg:hover:font-bold rounded-full cursor-pointer text-white p-2 bg-green-600"
            onClick={() => setAnswers((prev) => prev - 1)}
            disabled={answers === 0 ? true : false ||result==="true"? true:false}
          ></input>
          <p className="text-white p-5 text-sm">
            خلي بالك  ممكن تبقى باسمها كامل او باسم الشهره
            او الاسم الاخير
            <br />
            <span className="text-green-600 font-semibold">
              {" "}
              فاضلك {answers + " "}محاولات{" "}
            </span>
            <br id="p-1"/>
            لو مش متاكد من الإمْلاء الصح جرب في اسم الشهره و العيله بس منغير الاسم الاول
          </p>
          {res&&<p className="text-white">his correct name is :{data.Name}</p>}
        </form>
        <p
          className={`m-5 ${
            result === "true" ? "text-green-600" : "text-red-500"
          }`}
        >
          {result === "true" && "إجابتك صح خش عل اللاعب اللي وراه"}
          {result === "false" && " إجابتك غلط ممكن تكون غلطه في كتابه الاسم "}
        </p>
        <p className="text-red-500 font-semibold">
          {answers === 0 && " محاولاتك خلصت جرب تحل اللاعب اللي بعده "}
        </p>
        
          {
             result!="true" &&
            <CustomPlaceholder className="mx-auto rounded-3xl w-[300px] md:w-[600px]"
            width={300}
            height={300}
            backgroundColor="#0B1927"
            textColor="#ffffff"
            text="placeholder"
          />
          }
        {result === "true" && (
          <img
            loading="eager"
            src={data?.Image}
            className="fade-in w-[300px] md:w-[600px] rounded-3xl m-5 h-[300px] mx-[auto]"
          ></img>
        )}

{/* //suggestions  */}
        
          {/* <ul className='flex md:flex-row justify-center flex-wrap flex-col m-10 gap-2 text-green-600'>
    
         {  
          result==="false"&&
            allPlayers.filter((player: { Name: string }) => {
                if (input === '') {
                  return;
                } else if (player.FamName.toLowerCase().startsWith(input.toLowerCase())) {
                  return player;
                }
              }).map((player:any)=> 
            <li onClick={()=>setInput(player.Name)}>
              {player.Name}
            </li>
            )
            
            }
            </ul> */}

{/* //suggestions  */}
        <h1 className="text-white pl-7 mt-5 text-3xl mb-4">Clues:</h1>

        <p className="text-white p-7 text-base">{newPara}</p>
        <div className="flex gap-5 m-5 justify-center">
          <button
            className="text-white rounded-full cursor-pointer p-2 bg-green-600 lg:hover:font-bold  w-[120px]"
            onClick={() => {
              randomId();
              setResult(false);
              setInput("");
              setCounter(1);
              setAnswers(5);
              handleClickScroll();
              setRes(false)
            }}
          >
            Next player
          </button>
          <button
            className="text-white rounded-full cursor-pointer p-2  bg-green-600 lg:hover:font-bold w-[120px]"
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
          >
            Next Clue
          </button>
        </div>
      </div>
    );
  }
};

export default Singleplayer;
// export async function getStaticProps() {
//   const allPlayers=await prisma.player.findMany()
//   return{
//       props:{allPlayers}
//   }
// }