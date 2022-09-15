import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import playerDetailsReducer from './Reducer';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, playerDetailsReducer)

// export const store = configureStore({reducer: persistedReducer})
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)