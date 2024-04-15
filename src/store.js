// store.js
import { configureStore } from '@reduxjs/toolkit'
import { loadState, saveState } from './session';
import { setupListeners } from '@reduxjs/toolkit/query';
import themesReducer from './features/slices/themesSlice';


const persistedState = loadState();
// 

const store = configureStore({
    reducer: {
        switchTheme: themesReducer
    
    },

    preloadedState: persistedState, 

    
});

store.subscribe(()=>{
    saveState(store.getState());
  })
  
  setupListeners(store.dispatch)

export default store;
