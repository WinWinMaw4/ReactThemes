// ThemeSwitcher.js
import { useDispatch } from 'react-redux';
import { setTheme } from '../../features/slices/themesSlice';

const ThemeSwitcher = ({ theme }) => {
    const dispatch = useDispatch()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'dark' : 'light';
    dispatch(setTheme(newTheme))
    console.log(newTheme)
  };


  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};


export default ThemeSwitcher;
