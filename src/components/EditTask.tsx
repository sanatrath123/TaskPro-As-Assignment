import React, { useState } from 'react'
import { BsCalendar2Minus } from 'react-icons/bs';
import { CiRepeat, CiStar } from 'react-icons/ci';
import { GoStarFill } from 'react-icons/go';
import { IoNotificationsOutline, IoNotificationsSharp } from 'react-icons/io5';
import { RiDeleteBinLine } from "react-icons/ri";
import 'react-calendar/dist/Calendar.css';
// import Calender from "./Calender"
import { DeleteTodo, EditTodo, TodoType } from '../store/todoSlice';
import { TiTickOutline } from 'react-icons/ti';
import { useAppDispatch } from '../store/hook';


type EditTaskProps = {
  data: TodoType; // Assuming TodoType is already defined
};

const EditTask: React.FC<EditTaskProps> = ({ data }) => {

  const [show , setShow] = useState(true)
  const [Data , setData] = useState<TodoType>(data)

  //handle change for input field
  const handleChange=(field:string , e?:React.ChangeEvent<HTMLInputElement>)=>{
    let newValue 
if(e) newValue = e.target.value
else newValue = ! Data[field as keyof TodoType]
setData((prev)=>(
  {...prev , [field]:newValue}
))
  }

   
   //handle Submit
   const dispatch = useAppDispatch()
   const handleSubmit = ()=>{
    if(Data.task == "") return
   dispatch(EditTodo(Data))
   }

   //handle delete
   const handleDelete =()=>{
    console.log("hi clicked")
dispatch(DeleteTodo(Data.id))
setShow(false)
   }

const RememberComp = Data.reminder ? IoNotificationsSharp : IoNotificationsOutline
const FavComp = Data.favorite ? GoStarFill : CiStar

  return (
    <div className={`lg:w-[400px] mt-2 justify-between border-gray-100 min-h-screen relative dark:bg-[rgb(35,35,35)] bg-[#FBFDFC] ${!show && "hidden"}`}>
<ul className='mt-4  flex flex-wrap pl-3 py-6'>
<li className="flex justify-between px-2 w-full font-medium border-gray-600
      min-h-24 items-center border-b-[1px] border-t-[1px] py-10" >
<div className='flex items-center gap-2'>
  <div className='w-6 h-6 cursor-pointer border-2 border-gray-600 flex p-0 relative' onClick={()=>handleChange("completed")}>
 {Data.completed &&<TiTickOutline className='absolute -top-[6px] -left-[2px]' size={30} />}
  </div>
  <input className="text-md lg:text-lg max-w-[210px] bg-transparent border-0" value={Data.task} onChange={(e)=>handleChange("task" , e)}/> 
</div>
<FavComp onClick={()=>handleChange("favorite")} size={30}/> 

  </li>

  {/* <li className='flex flex-col px-4 w-full font-medium border-gray-600 gap-1  min-h-48 items-center border-b-[1px] border-t-[1px] py-3 cursor-pointer'>
  <div className='flex'><FaPlus size={20}/>  Add Task</div><Calender/>
  </li> */}

  <li className='flex px-4 w-full font-medium border-gray-600 gap-5  min-h-16 items-center border-b-[1px] border-t-[1px] py-3 cursor-pointer'>
 <RememberComp size={25} onClick={()=>handleChange("reminder")} />
    Set Reminder
  </li>
  <li className='flex flex-wrap px-4 w-full font-medium border-gray-600 gap-3  min-h-16 items-center border-b-[1px] border-t-[1px] py-3 cursor-pointer'>
 <div className='w-full flex gap-5'>
 <BsCalendar2Minus size={25}/>
 AddDue Date
 </div>

  </li>
  <li className='flex px-4 w-full font-medium border-gray-600 gap-5  min-h-16 items-center border-b-[1px] border-t-[1px] py-3 cursor-pointer'>   <CiRepeat size={25}/>
   Repeat
  </li>
</ul>

<div className=' h-12 w-full mt-8 flex justify-between px-3 items-center'>
  <button className='p-2 rounded-xl bg-green-500' onClick={handleSubmit}>Add Edit</button>
<RiDeleteBinLine size={30} color='red' 
onClick={handleDelete}
/>

</div>
    </div>
  )
}

export default EditTask