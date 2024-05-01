import React from 'react'

const Body = ({setShowTaskBar, setFilterOption}) => {
    const addTaskBtn = () => {
        setShowTaskBar((prevState) => !prevState);
      };
    
    //   console.log(filterOption)
  return (
    <>
        <div className="sm:w-[600px] sm:m-auto " >
            <div className="flex justify-between mt-0">
                <button className='text-[1rem] text-[#fff] cursor-pointer ml-3 px-[15px] sm:px-10 py-3 bg-[#646FF0] rounded-[5px]  mt-0 '
                    onClick={addTaskBtn} > Add task
                </button>

                <select className="cursor-pointer text-[#585858] text-[1rem] mr-3 mt-0 sm:px-7 sm:py-[10px] bg-[#CCCDDE] rounded-[5px] "
                    name="options" onClick={e => setFilterOption(e.target.value)}>
                    <option value="all">All</option>
                    <option value="incomplete">incomplete</option>
                    <option value="completed">completed</option>
                </select>
           </div>
        </div>
    </>
  )
}

export default Body