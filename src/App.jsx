import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const savedTheme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light');


  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {

    localStorage.setItem('theme', theme);
    console.log("localstorea theme",theme)

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
      
   <div  className=" min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-800 ">
  <div className=" p-10 bg-blue-600 dark:bg-black border">
  <div className="px-7 py-2 rounded text-pink-600 dark:text-yellow-400 bg-pink-200 dark:bg-yellow-200 cursor-pointer" onClick={handleThemeSwitcher}>
     This is a Box 
    </div>

    {/* <ThemeSwitcher /> */}
    
   <h1 className="text-5xl  font-bold underline text-foreground">
      Hello Themes!
    </h1>
    <p className="text-foreground-secondary">Text foreground color</p>
  </div>
   
    
   </div>

    </>
  )
}

export default App
