import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Notodo from "./Notodo";
// import { CiEdit } from "react-icons/ci";


const DisplayTasks = ({ setTaskArray, taskArray, setEditTaskBar, filterOption, completed}) => {
  const handleCheck = (index) => {
    const updatedTasks = [...taskArray];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updatedTasks[index].status = "completed";
    setTaskArray(updatedTasks);
  };
  
//  delete task function
  const deleteTask = (name) => {
   const newArray = taskArray.filter((task)=> task.name !== name)
    setTaskArray(newArray);
  };


// edit Task function
// const editTask = () => {
//   setEditTaskBar(prev => !prev)
// }


  console.log(taskArray);
  return (
    <>
    {taskArray.length === 0 ?  <Notodo /> : (
      <div className="flex gap-2 flex-col sm:w-[600px] p-5 m-auto mt-5 bg-[#ECEDF6] rounded-[5px]  ">
        {taskArray.filter((task) => filterOption === "all" || task.status === filterOption )
        .map((task, index) => {
          return (
              <div className="sm:m-auto m-auto rounded-[5px] bg-white mt-1  p-[10px] w-[270px] sm:w-[500px] flex justify-between" key={index} >
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={task.status.completed}
                    name="check"
                    onChange={() => handleCheck(index)}
                  />
                  <p style={{  textDecoration: task.completed ? "line-through" : "none",}}>
                    {" "}
                    {task.name}
                  </p>
                </div>

                <div className="flex gap-1">
                  <button onClick={() => deleteTask(task.name)}>
                    <FaTrashAlt />
                  </button>
                  {/* <button onClick={editTask}>
                    <CiEdit />
                  </button> */}
                </div>
              {}
            </div> 
    
          )
          }
        )}
      </div>
    )
  } 
    </>
  );
};

export default DisplayTasks;
