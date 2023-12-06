import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface initialStates {
    date:string,
    time:number,
    name: string,
    adress:string,
    typeDevelop: string,
    phone:string,
    email:string,
    square:number,
  }

// export const postBooking = createAsyncThunk<>('posts/fetchPosts', async () => {
//     const controler = new AbortController()
//     const signal = controler.signal
//     return await JsonPlaceholderAPI.getPosts({ signal })
//   })

const initialOrder: initialStates = {
    date:'',
    time: 0,
    name: '',
    adress:'',
    typeDevelop: '',
    phone:'',
    email:'',
    square:0,
}

export const ordersSlicer = createSlice({
    name: 'orders',
    initialState: {
        orders: initialOrder,
        loading: false,
    },
    reducers: {
        addOrder(state,action:PayloadAction<initialStates>){
            state.orders = action.payload
        }
    }
})

export const { addOrder } = ordersSlicer.actions

export const selectBooking = (state: RootState) => state.orders.orders