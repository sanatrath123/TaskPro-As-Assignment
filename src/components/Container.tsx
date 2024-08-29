
import { CiStar } from "react-icons/ci";
import { CiSquareChevDown } from "react-icons/ci";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import { CiRepeat } from "react-icons/ci";
import { BsCalendar2Minus } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { TiTickOutline } from "react-icons/ti";
import Menubar from "./Menubar";
import EditTask from "./EditTask";
import { useState } from "react";
import { AddTodo, EditTodo, TodoType } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { RxCross2 } from "react-icons/rx";


const Container = ({menuActive , blockType}:{menuActive:boolean, blockType:boolean}) => {

const todoList = useAppSelector((state)=>state.Todo)

  //form value
  const defaultObj:TodoType = { id: "id"+Math.random().toString(16).slice(2,10) ,    task:"",
    date:"",
    important: false,
    reminder: false,
    favorite: false,
    completed:false  }
  const [ addTask , setAddTask] = useState<TodoType>(defaultObj)
  const [showEditsection , setShow] = useState(false)


  //handle field changes
 const handleDateTask=(field:string ,e?:React.ChangeEvent<HTMLInputElement>)=>{
  let newValue 
if(e)newValue = e.target.value
else newValue = !addTask[field as keyof TodoType]
setAddTask((prev)=>(
  {...prev, [field]: newValue}
))
}


//handle Submit
const dispatch = useAppDispatch()
const handleSubmit = ()=>{
 if(addTask.task == "") return
dispatch(AddTodo(addTask))
setAddTask(defaultObj)
}

//mark as completed function
const handleDipatch = (field:string , item:TodoType)=>{
  const editedItem = {...item , [field]:!item[field as keyof TodoType]}
  dispatch(EditTodo(editedItem))
 }

 //send data to edited section
 const [editedData , setEdited] = useState<TodoType> (defaultObj)
  const handleEditsection = (item:TodoType)=>{
    setEdited(item)
    setShow(!showEditsection)
  }

//component for icons where conditionaly changes
const RememberComp = addTask.reminder ? IoNotificationsSharp : IoNotificationsOutline

  return (
    <div className='w-[1344px] flex gap-5'>
{/* menubar section */}
     { menuActive && <Menubar/>}

{/* all todo list setion */}
 <div className={`w-[100%]${menuActive && "max-w-[70%]" } ${showEditsection && menuActive ? "w-[650px]":"w-[100%]" } flex flex-col items-center mt-3`}>

<h1 className='w-[97%] text-gray-500 font-semibold text-lg border-b-[1px] border-[rgb(189,193,195)] px-8 flex items-center gap-3 mt-2'>To Do <CiSquareChevDown size={25}/>
  </h1>
{/* add task in lists */}
  <div className='w-[97%] mt-5 flex flex-wrap min-h-[11rem] px-4 bg-[#e9f3ea] justify-center mb-4 dark:bg-[rgb(47,54,48)]'>

<input className='text-lg border-0 bg-transparent rounded-2xl dark:text-gray-200 text-gray-800 font-semibold mt-5 w-full px-6'placeholder="ADD A Task"
value={addTask.task}
onChange={(e)=>handleDateTask("task" ,e )}
/>
{/* iccons and button */}
<div className='flex justify-between px-6 w-full items-center'>

<div className='flex gap-6 '>
<RememberComp size={35} onClick={()=>handleDateTask("reminder")}/>
<CiRepeat size={35}/>
<BsCalendar2Minus size={30}/>
</div>

<button className='text-green-800 font-semibold text-xl rounded-2xl px-3 h-12 bg-green-200 dark:bg-green-600 dark:text-gray-100'
onClick={handleSubmit}
>ADD TASK</button>
</div>
  </div>

{/* lists */}

<ul className={`w-[97%] flex flex-wrap ${blockType && "justify-evenly gap-3"}`}>

  {
    todoList && todoList.map((item:TodoType)=>{
      const FavComp = item.favorite ? GoStarFill : CiStar
      if(item.completed) return
    return  <li key={item.id} className={`flex justify-between px-4 font-medium  border-gray-600
        ${blockType ?" w-[350px] relative  min-h-32 items-center border-[1px] py-10 rounded-2xl" :" w-full relative min-h-[5rem] items-center border-t-[1px]"}`}>
    <div className='flex items-center gap-2'>
      <div className='w-6 h-6 border-2 border-gray-600 flex p-0 relative'
      onClick={()=>handleDipatch("completed" ,item)}>
      </div>
      <h2 className={`text-md lg:text-lg relative cursor-pointer ${blockType && "max-w-[210px]"}`}
      onClick={()=>handleEditsection(item)}>{item.task}
      <span className="absolute text-sm font-medium text-nowrap bottom-[-1rem] opacity-0 hover:opacity-100 transition-opacity left-2">click for Edit</span>
      </h2>
    </div>
    <FavComp onClick={()=>handleDipatch("favorite",item )} size={30}/>
  </li>
    })
  }

  
</ul>

{/* this is completed section */}
<ul className='w-[97%] flex flex-wrap mt-7'>
  <h2 className='text-lg font-semibold text-gray-200 px-6 mb-2 flex items-center gap-2 cursor-pointer'>Completed
  <CiSquareChevDown size={25}/>
  </h2>

  {
    todoList && todoList.map((item:TodoType)=>{
      if(!item.completed) return
      const FavComp = addTask.favorite ? GoStarFill : CiStar
   return   <li key={item.id} className='flex justify-between px-4 w-full text-xl font-semibold min-h-20 items-center border-t-[1px] border-gray-600'>
<div className='flex items-center gap-5'>
  <div className='w-6 h-6 border-2 border-gray-600 flex p-0 relative bg-green-500'
  onClick={()=>handleDipatch("completed" ,item)}>
  <TiTickOutline className=' absolute -top-[6px] -left-[2px]' size={30}/>
  </div>
  <h2 className="line-through">{item.task}</h2>
</div>
<FavComp onClick={()=>handleDipatch("favorite",item )} size={30}/>
  </li>
    })
  }
</ul>
 </div>

 
 {
 showEditsection &&
 <div className=" relative">
  <RxCross2 className="absolute top-1 left-1 z-20" size={30}
  onClick={()=>setShow(false)}
  />
   <EditTask data={editedData} />
   </div>
   }
    </div>
  )
}

export default Container