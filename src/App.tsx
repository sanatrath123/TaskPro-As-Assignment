import { useState } from "react"
import Container from "./components/Container"
import Navbar from "./components/Navbar"
import { useAppSelector} from "./store/hook"



const App = () => {

  const [navbarToggle , setNavbar] = useState<boolean>(true)
const [ blockType , setBlocktype] = useState<boolean>(false)
  const toggleMenu = ():void=>{
    setNavbar(!navbarToggle)
  }
  const toggleBlock = ():void=>{
    setBlocktype(!blockType)
  }

  const theme = useAppSelector((state)=>state.auth.theme)
  return (
   <div className={` ${theme} bg-black`}>
     <div className='w-[1400px]  dark:bg-[rgb(35,35,35)] bg-[#FBFDFC] min-h-screen px-4 mx-auto dark:text-gray-100'>
<Navbar toggleMenu={toggleMenu} toggleBlock={toggleBlock}/>
<Container menuActive={navbarToggle} blockType={blockType} />
    </div>
   </div>
  )
}

export default App