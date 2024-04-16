// ThemeSwitcher.js
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../features/slices/themesSlice';


const ThemeSwitcher = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.switchTheme.theme);


  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme))
  };


  return (
    <button onClick={toggleTheme} className='primary-text-color py-2 px-5 border '>
      Go To {theme === 'dark' ? 'light' : 'dark'} 
    </button>
  );
};


export default ThemeSwitcher;
