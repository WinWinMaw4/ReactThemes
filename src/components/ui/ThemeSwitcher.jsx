// ThemeSwitcher.js
import { useDispatch } from 'react-redux';
import { setTheme } from '../../features/slices/themesSlice';

const ThemeSwitcher = ({ theme }) => {
    const dispatch = useDispatch()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme))
    console.log(newTheme)
  };


  return (
    <button onClick={toggleTheme} className='primary-text-color py-2 px-5 border '>
      Go To {theme === 'dark' ? 'light' : 'dark'} 
    </button>
  );
};


export default ThemeSwitcher;
