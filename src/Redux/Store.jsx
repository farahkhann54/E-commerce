import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Redux/Slice'
import favouriteReducer from '../Redux/FavSlice'
const Store = configureStore({
    reducer:{
        cart: cartReducer,
        favourite: favouriteReducer

    }
})
export default Store