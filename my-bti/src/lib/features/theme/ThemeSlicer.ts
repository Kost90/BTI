import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialTheme: string = 'light'

export const ThemeSlicer = createSlice({
    name: 'theme',
    initialState: {
        theme: initialTheme,
        loading: false,
    },
    reducers: {
        addTheme(state,action:PayloadAction<string>){
            state.theme = action.payload
        }
    }
})

export const { addTheme } = ThemeSlicer.actions

export const selectBooking = (state: RootState) => state.theme.theme