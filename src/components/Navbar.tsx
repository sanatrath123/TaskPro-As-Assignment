import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { IoList } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../store/hook';
import { changeTheme } from '../store/authSlice';

interface NavbarProps {
  toggleMenu: () => void;
  toggleBlock:()=> void
}

const Navbar: React.FC<NavbarProps> = ({toggleMenu , toggleBlock}) => {
const [ blocktype , setBlockType ] = useState<boolean>(false)
const theme = useAppSelector((state)=>state.auth.theme)
const dispatch = useAppDispatch()

const handleBlockList= ()=>{
  toggleBlock()
setBlockType(!blocktype)
}

const handleTheme = ()=>{
dispatch(changeTheme())
}
  return (
    <div className='w-full h-[3.5rem]  dark:bg-[rgb(35,35,35)] bg-[#FBFDFC] flex px-6 justify-between '>

        <div className='flex gap-6 items-center '>
            <IoMenuOutline size={30}
            onClick={toggleMenu}
            />
            <div className='flex gap-1'>
            <img src="/logo.png" className='h-8' alt="logo" />
                <span className='font-bold text-green-600 text-xl'>Doit</span>
                
            </div>
        </div>

        <div className='flex gap-5 items-center'>
        <IoSearchOutline size={30}/>
        { theme=="dark" ?<MdDarkMode onClick={handleTheme} size={30}/>:<CiLight onClick={handleTheme} size={30}/> }
       {
         blocktype  ?<IoList size={30} onClick={handleBlockList}/>  :<CiBoxList size={30} onClick={handleBlockList}/>
        }
  
        </div>
    </div>
  )
}

export default Navbar