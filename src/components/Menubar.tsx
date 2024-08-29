import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import '../dist/style.css';
import { BiTask } from 'react-icons/bi'
import { CiStar } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { MdOutlineAssignmentInd, MdOutlineCalendarToday } from 'react-icons/md'
import { SlBookOpen } from 'react-icons/sl'

const Menubar = () => {
    const NavItems = [
        {name:"All Tasks" , logo:<BiTask size={30}/>,slug: "/"},{name:"Today" , logo:< MdOutlineCalendarToday size={30}/>,slug: "/"},{name:"Important" , logo:<CiStar size={30}/>,slug:""},{name:"Plannned" , logo:<SlBookOpen size={30}/>,slug:"/"},{name:"Assigned to me" , logo:<MdOutlineAssignmentInd size={30}/>,slug: "/"}, 
    ]
    
    
      return (
    
            <div className='dark:bg-[rgb(44,44,44)] bg-[#FBFDFC] w-[25%] lg:min-h-screen xl:min-h-[800px]  flex flex-col justify-center mt-28 relative items-center gap-4 dark:text-gray-100'>
           <img src="/personLogo.png" className='h-28 w-28 rounded-full absolute -top-[5.5rem] left-1/2 -translate-x-1/2' alt="" />
           <span className='text-xl font-bold mt-1'>Hey, Conor</span>
    
    {/* nav items */}
           <ul className='w-11/12 min-h-48 bg-[#f6faf8] dark:bg-[rgb(35,35,35)] '>{
        NavItems.map((item ,i)=>(
            <li key={i} className='h-12 flex items-center gap-4 px-3 hover:bg-green-300 hover:text-green-800 cursor-pointer'>
        {item.logo}
        <span className='text-lg font-medium'>{item.name}</span>
    </li>
        ))
    } </ul>
    
    {/* add item */}
    <div className='flex w-11/12 bg-[#FBFDFC] dark:bg-[rgb(35,35,35)] py-8 items-center gap-4 px-4 hover:bg-green-50 '>
    <FaPlus size={30}/> 
    <span className='text-xl font-medium'>AddList</span>
    </div>
    
    
    {/* stats */}
    <div className='w-11/12 min-h-[250px] bg-[#FBFDFC] dark:bg-[rgb(35,35,35)] flex flex-wrap justify-center relative'>
    <div className='w-full text-xl font-semibold border-b-[1px] border-[rgb(189,193,195)] min-h-10'>
    <div className='flex justify-between w-full px-3'>
    <span>Today Tasks</span>
    <IoIosInformationCircleOutline size={30}/>
    </div>
    <span className='font-bold mt-3 px-3 text-2xl w-full'>11</span>
    </div>
      <CircularProgressbar className='h-32 w-32 mt-2' strokeWidth={16} value={70} />
    
    <div className='flex absolute bottom-[1px] left-2 items-center gap-4'>
    <div className='flex items-center gap-1'>
    <div className='w-3 h-3 rounded-full bg-green-800'></div>
    <span className='text-sm font-thin'>Pending</span>
    </div>
    <div className='flex items-center gap-1'>
    <div className='w-3 h-3 rounded-full bg-gray-800'></div>
    <span className='text-sm font-thin'>Done</span>
    </div>
    </div>
    </div>  </div>
  )
}

export default Menubar