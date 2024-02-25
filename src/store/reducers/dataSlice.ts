import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type DataResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};

type Character = {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

type GetData = {
  URI: string;
  data: DataResponse;
};

// Define the initial state using that type
const initialState: GetData = {
  URI: "https://rickandmortyapi.com/api/character",
  data: {
    info: {
      count: 0,
      next: null,
      pages: 0,
      prev: null,
    },
    results: [],
  },
};

export const dataSlice = createSlice({
  name: "getData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    editURI: (state, action: PayloadAction<string>) => {
      state.URI = action.payload;
    },
    changeData: (state, action: PayloadAction<DataResponse>) => {
      state.data = action.payload;
    },
  },
});

export const { editURI, changeData } = dataSlice.actions;

export default dataSlice.reducer;
