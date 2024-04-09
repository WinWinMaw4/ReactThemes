// store.js
import { configureStore } from '@reduxjs/toolkit'
import themesReducer from './features/slices/themesSlice';


const store = configureStore({
    reducer: {
        switchTheme: themesReducer
    
    },
    
});

export default store;
