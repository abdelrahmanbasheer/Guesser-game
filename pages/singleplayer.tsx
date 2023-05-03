import LoadingSpinner from "@/components/LoadingSpinner";
import { getPlayer } from "@/utils/function";
import { Card } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
const Singleplayer = () => {
  const [id, setId]           = useState<number>();
  const [counter, setCounter] = useState<number>(1);
  const [answers, setAnswers] = useState<number>(5);
  const [input, setInput]     = useState<string>("");
  const [result, setResult]   = useState<boolean | string>();

  useEffect(() => {
    randomId();
  }, []);

  function randomId() {
    const tempId = Math.floor(Math.random() * 40) + 1;
    setId(tempId);
  }
  function handleSubmit() {
    if (input.toLowerCase().trim() === data.Name.toLowerCase().trim()) {
      setResult("true");
    } else {
      setResult("false");
      setInput("");
    }
  }

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
      <div className="h-[180vh] lg:h-[100vh] bg-black text-center lg:py-[10%] py-[25%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            className="m-2"
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
            }}
          />
          <input
            type="submit"
            className=" lg:hover:font-bold rounded-full cursor-pointer text-white p-2 bg-green-600"
            onClick={() => setAnswers((prev) => prev - 1)}
            disabled={answers === 0 ? true : false}
          ></input>
          <p className="text-white p-5 text-sm">
            خلي بالك فيه لاعيبه ممكن تبقى باسمها كامل و لعيبه تانيه باسم الشهره
            او الاسم الاخير 
            <br />
            <span className="text-green-600 font-semibold">
              {" "}
              فاضلك {answers + " "}محاولات{" "}
            </span>
          </p>
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
        {result === "true" && (
          <img
            src={data?.Image}
            className="fade-in w-[600px] rounded-3xl m-5 h-[300px] mx-[auto]"
            loading="lazy"
          ></img>
        )}
        <h1 className="text-white pl-7 mt-5 text-3xl mb-4">Clues:</h1>

        <p className="text-white p-7 text-base">{newPara}</p>
        <div className="flex gap-5 m-5 justify-center">
          <button
            className="text-white rounded-full cursor-pointer p-2 bg-green-600 lg:hover:font-bold"
            onClick={() => {
              randomId();
              setResult(false);
              setInput("");
              setCounter(1);
              setAnswers(5);
            }}
          >
            Next player
          </button>
          <button
            className="text-white rounded-full cursor-pointer p-2 bg-green-600 lg:hover:font-bold"
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