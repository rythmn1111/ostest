import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WindowOpenState {
    value: boolean
}

const initialState: WindowOpenState = {
    value: false
}

export const windowOpenSlice = createSlice({
    name: 'windowOpen',
    initialState,
    reducers: {
        openWindow: (state) => {
            state.value = true
        },
        closeWindow: (state) => {
            state.value = false
        },
        toggleWindow: (state) => {
            state.value = !state.value
        }
    }
})

export const { openWindow, closeWindow, toggleWindow } = windowOpenSlice.actions

export default windowOpenSlice.reducer