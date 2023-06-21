import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllHeros } from "../service/backAPI";

export const getHeros = createAsyncThunk(
  "heroes/getAll",
  async (page, thunAPI) => {
    try {
      const result = await getAllHeros();
      console.log(page);
      return result;
    } catch (err) {
      thunAPI.rejectWithValue(err);
    }
  }
);
