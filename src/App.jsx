import './App.css'
import ThemeSwitcher from "./components/ui/ThemeSwitcher"

function App() {
  // const {theme} = useSelector()
  return (
    <>
      
   <div id='App' data-theme="dark" className="min-h-screen flex flex-col justify-center items-center  ">
   <div className="box px-7 py-2 rounded">
     This is a Box 
    </div>

    <ThemeSwitcher theme={"light"} />
    
   <h1 className="text-5xl font-bold underline title">
      Hello Themes!
    </h1>
    <div className="theme-switch flex space-x-2 p-5">
      <button type="button" className='px-5 py-2 border rounded bg-slate-500 text-white '>Light</button>
      <button type="button" className='px-5 py-2 border rounded bg-black text-white'>Dark</button>
    </div>
    
   </div>

    </>
  )
}

export default App
