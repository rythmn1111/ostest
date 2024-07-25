import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ZIndexState {
    value: number;
    windows: { [key: string]: number };
}

const initialState: ZIndexState = {
    value: 3,
    windows: {}
}

export const zIndexSlice = createSlice({
    name: 'zIndex',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            const windowId = action.payload
            const currentZIndex = state.windows[windowId] || 0

            if (currentZIndex < state.value) {
                state.value += 1
                state.windows[windowId] = state.value
            }
        }
    }
})

export const { increment } = zIndexSlice.actions

export default zIndexSlice.reducer