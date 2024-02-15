import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../configs/axios";
import { Agent } from "../../types/types";

export const fetchAgents = createAsyncThunk("agents/fetchAgents", async () => {
  const { data } = await axios.get("/agents");
  return data;
});

interface InitialState {
  data: {
    data: Agent[];
  } | null;
  status: string;
}

const initialState: InitialState = {
  data: null,
  status: "loading",
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAgents.pending, (state, action) => {
      state.status = "loading";
      state.data = null;
    });
    builder.addCase(fetchAgents.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchAgents.rejected, (state, action) => {
      state.status = "error";
      state.data = null;
    });
  },
});

export const agentsReducer = agentsSlice.reducer;
