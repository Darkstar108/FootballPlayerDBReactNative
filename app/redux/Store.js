import { configureStore } from '@reduxjs/toolkit'
import playerDetailsReducer from './Reducer';

const store = configureStore({ reducer: playerDetailsReducer })

export default store;