import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../configs/axios";
import { Weapon } from "../../types/types";

export const fetchWeapons = createAsyncThunk("weapons/fetchWeapons", async () => {
  const { data } = await axios.get("/weapons");
  return data;
});

interface InitialState {
  data: {
    data: Weapon[];
  } | null;
  status: string;
}

const initialState: InitialState = {
  data: null,
  status: "loading",
};

const weaponsSlice = createSlice({
  name: "weapons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeapons.pending, (state, action) => {
      state.status = "loading";
      state.data = null;
    });
    builder.addCase(fetchWeapons.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchWeapons.rejected, (state, action) => {
      state.status = "error";
      state.data = null;
    });
  },
});

export const weaponsReducer = weaponsSlice.reducer;
