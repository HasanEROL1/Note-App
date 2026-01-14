import {combineReducers, configureStore} from "@reduxjs/toolkit"
 import notesReducer from "./slices/notesSlice"
 import tagsReducer from "./slices/tagsSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"



 // persist ayarlarını yap
 const persistConfig ={
    key: "root",
    storage,
 }

 // reducerları birleştir
 const rootReducer = combineReducers({
    notes: notesReducer,
    tags: tagsReducer,
 })

 // reducerları persist işleminden geçir
 const persistedReducer =persistReducer(persistConfig, rootReducer)
 const store = configureStore({
    // storedaki reducerları tanımla
    reducer: persistedReducer,
    // persist işleminden geçirilen reducerların serializable olmadığını belirt
    middleware:(getDefaultMiddleWare) =>
        getDefaultMiddleWare({
   serializableCheck:false
        })
   
    })

  
// useSelector kullanırken store'un tipini belirtmek için
export type RootState = ReturnType<typeof store.getState>

// useSelector kullanırken store'un tipini belirtmek için
 export type AppDispatch = typeof store.dispatch

// persist store u export et
export const persistor = persistStore(store)

export default store