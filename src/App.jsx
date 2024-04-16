import { useSelector } from 'react-redux';
import './App.css'
import ThemeSwitcher from "./components/ui/ThemeSwitcher"
import { useEffect, useState } from 'react';

function App() {
  // const theme = useSelector(state => state.switchTheme.theme);

  const [theme, setTheme] = useState(null);

  useEffect(()=>{
    if(window.matchMedia(`(prefers-color-scheme: dark)`).matches){
      setTheme('dark');
    }else{
      setTheme('light')
    }
  },[])

  useEffect(() => {
  if(theme === "dark"){
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");
  }
  console.log("theme",theme)
  }, [theme])

  const handleThemeSwitcher  = () =>{
    setTheme(theme === "dark" ? "light":"dark")
    
  }
  return (
    <>
      
   <div  className=" min-h-screen flex flex-col justify-center items-center bg-green-400 dark:bg-gray-700">
  <div className=" p-10 bg-blue-300 dark:bg-black border">
  <div className="px-7 py-2 rounded text-pink-600 dark:text-yellow-400 bg-pink-200 dark:bg-yellow-200 cursor-pointer" onClick={handleThemeSwitcher}>
     This is a Box 
    </div>

    {/* <ThemeSwitcher /> */}
    
   <h1 className="text-5xl font-bold underline text-pink-600 dark:text-yellow-400">
      Hello Themes!
    </h1>
  </div>
   
    
   </div>

    </>
  )
}

export default App
