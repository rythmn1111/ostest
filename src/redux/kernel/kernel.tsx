import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDetails, apps } from "@/kernel/kernelregistery";
export interface processState {
    process: AppDetails[];
}

const initialState: processState = {
    process: []
};

export const processSlice = createSlice({
    name: "process",
    initialState,
    reducers: {
        addProcess: (state, action: PayloadAction<AppDetails>) => {
            state.process.push(action.payload);
        },
        removeProcess: (state, action: PayloadAction<number>) => {
            state.process.splice(action.payload, 1);
        }
    }
});

export const { addProcess, removeProcess } = processSlice.actions;

export default processSlice.reducer