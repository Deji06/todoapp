import React from "react";
import { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";

const SetTask = ({ setTaskArray, taskArray, setShowTaskBar ,userInputValue, setUserInputValue, filterOption, }) => {
  const [completed, setCompleted] = useState("incomplete")

  const handleUserInput = (event) => {
    event.preventDefault();
    //  console.log(userInputValue);
    setUserInputValue(event.target.value);
  };
  
  const addTask = () => {
    console.log(taskArray);
    console.log(userInputValue);
    // console.log(taskArray.includes(userInputValue));


    userInputValue==='' ? alert('input task'):setTaskArray((prevuserInputValue) => {
            return [
              ...prevuserInputValue,
              { name:userInputValue, completed: completed === "completed", status: completed },
            ];
          });
      setShowTaskBar(false);
    }

    // console.log({completed})

  const cancelTask = () => {
    setShowTaskBar(false);
  };

  return (
    <>
      <div className="sm:w-[500px] w-[320px] rounded-[10px]  p-5   mx -auto  bg-[#ECEDF6]  absolute  left-1/2 right-1/2 transform -translate-x-1/2 ">
         <MdCancelPresentation  className="absolute text-[2rem] top-[-40px] right-0 " onClick={cancelTask}/>
            <h3 className="text-[1.2rem] text-[#646681] mt-0 ml-5"> Add <span className="uppercase">todo</span>  </h3>
            <form className="flex flex-col ml-3 mt-3 gap-[0.5rem]"> 
            <label className="text-[1.2rem] ml-3 text-[#646681]" htmlFor="inputTask">Title</label>
            <input
                id="inputTask"
                type="text"
                value={userInputValue}
                onChange={handleUserInput}
                className=" w-[250px] py-3 ml-3  rounded-[5px] text-[1rem] sm:w-[400px]"
            />

            <label className="text-[1.2rem] ml-3 text-[#646681]" htmlFor="option">status</label>
            <select className="w-[250px] ml-3 py-3  sm:w-[400px]" name="" id="" onChange={(e) => setCompleted(e.target.value)}>
                <option value="incomplete">incomplete</option>
                <option value="completed">complete</option>
            </select>
            </form>

            <div className="flex gap-2 mt-5 ml-5">
                <button className="bg-[#646FF0] outline-none cursor-pointer rounded-[5px] text-[#fff] px-7 py-2"
                    onClick={addTask}
                >
                    Add task
                </button>

                <button className="bg-[#DEDFE1] outline-none cursor-pointer rounded-[5px] text-[#646681] px-7 py-2 "
                    onClick={cancelTask}>
                    {" "}
                    Cancel
                </button>
            </div>
      </div>
    </>
  );
};

export default SetTask;
