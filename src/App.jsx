
import React from "react";
import Body from "./components/Body";
import { useState , useEffect} from "react";
import 'tailwindcss/tailwind.css';
import SetTask from "./components/SetTask";
import DisplayTasks from "./components/DisplayTasks";
import EditTask from "./components/EditTask";


function App() {
  const [taskArray, setTaskArray] = useState([]);
  const [showTaskBar, setShowTaskBar] = useState(false);
  const [editTaskBar, setEditTaskBar] = useState(false);
  const [userInputValue, setUserInputValue] = useState("");
  const[filterOption, setFilterOption] = useState('all');
  const [completed, setCompleted] = useState("incomplete");
  
  return (
    <>
      <main>
        <h1 className='text-center text-[2rem] uppercase text-[#646681]  mt-3'> todo app </h1>
        
        <div style={{marginTop:'40px'}}>

          <Body showTaskBar={showTaskBar} 
            setShowTaskBar={setShowTaskBar} 
            userInputValue={userInputValue} 
            setuserInputValue={setUserInputValue} 
            filterOption={filterOption} 
            setFilterOption={setFilterOption}
            taskArray = {taskArray}
          />

          {showTaskBar && (
            <SetTask
              taskArray={taskArray}
              setTaskArray={setTaskArray}
              setShowTaskBar={setShowTaskBar}
              setUserInputValue={setUserInputValue}
              userInputValue={userInputValue}
              filterOption={filterOption}
              setFilterOption={setFilterOption}
              completed={completed}
              setCompleted={setCompleted}
            />
          )}

          <DisplayTasks taskArray={taskArray} 
            setTaskArray={setTaskArray} 
            setShowTaskBar={setShowTaskBar} 
            showTaskBar={showTaskBar}  
            editTaskBar={editTaskBar} 
            setEditTaskBar={setEditTaskBar}  
            filterOption={filterOption}
            setFilterOption={setFilterOption}
            completed={completed}
          />
          
          {editTaskBar && <EditTask 
            editTaskBar={editTaskBar} 
            setEditTaskBar={setEditTaskBar}
            userInputValue={userInputValue}
            setuserInputValue={setUserInputValue}
            taskArray={taskArray}
            setTaskArray={setTaskArray}
            setShowTaskBar={setShowTaskBar}
            showTaskBar={showTaskBar}
          />} 
          {/* <EditTask /> */}
        </div>
        
      </main>
    </>
  );
}

export default App;

