import { useSelector } from 'react-redux';
import './App.css'
import ThemeSwitcher from "./components/ui/ThemeSwitcher"

function App() {
  const theme = useSelector(state => state.switchTheme.theme);
  return (
    <>
      
   <div id='App' data-theme={theme} className="min-h-screen flex flex-col justify-center items-center   ">
   <div className="box px-7 py-2 rounded  primary-text-color">
     This is a Box 
    </div>

    <ThemeSwitcher theme={theme} />
    
   <h1 className="text-5xl font-bold underline title primary-text-color">
      Hello Themes!
    </h1>
   
    
   </div>

    </>
  )
}

export default App
