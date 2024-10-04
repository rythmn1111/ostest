import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDetails, apps } from "@/kernel/kernelregistery";

let lastId = 0;

function generateUniqueId(): number {
  return ++lastId;
}

export interface processState {
  process: AppDetails[]; // Array to store running processes
}

const initialState: processState = {
  process: []
};

export const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    addProcess: (state, action: PayloadAction<{ appKey: number }>) => {
      const appKey = action.payload.appKey;
      const appDetails = apps[appKey];

      if (appDetails) {
        const uniqueId = generateUniqueId();  // Generate unique ID

        // Create new process, pass unique ID to appCode
        const newProcess = {
          ...appDetails,
          id: uniqueId, // Assign generated unique ID
          appCode: () => <appDetails.appCode id={uniqueId} /> // Pass ID to appCode
        };

        state.process.push(newProcess);  // Add new process to the state
      }
    },
    removeProcess: (state, action: PayloadAction<number>) => {
        state.process = state.process.filter(app => app.id !== action.payload);
        console.log(state.process, action) // Filter by process ID
    }
  }
});

export const { addProcess, removeProcess } = processSlice.actions;
export default processSlice.reducer;
