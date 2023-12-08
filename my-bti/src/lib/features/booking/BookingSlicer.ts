import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';


interface initialStates{
    date:string,
    time:number,
}

const initialBook: initialStates = {
    date:'',
    time: 0,
}

export const bookingSlicer = createSlice({
    name: 'booking',
    initialState: {
        booking: initialBook,
        loading: false,
    },
    reducers: {
        addBook(state,action:PayloadAction<initialStates>){
            state.booking = action.payload
        }
    }
})

export const { addBook } = bookingSlicer.actions

export const selectBooking = (state: RootState) => state.booking.booking