import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const response = await axios.get("/countries");
    return response.data;
  }
);

export const getByName = createAsyncThunk(
  "countries/getByName",
  async (name) => {
    const response = await axios.get(`/countries/?name=${name}`);
    return response.data;
  }
);

export const getById = createAsyncThunk(
  "countries/getById",
  async (id) => {
    const response = await axios.get(`/countries/${id}`);
    return response.data;
  }
);

export const getActivities = createAsyncThunk(
  "countries/getActivities",
  async () => {
    const response = await axios.get("/activities");
    return response.data;
  }
);

const initialState = {
  countries: [],
  activities: [],
  sorting: [], // backup
  status: "idle",
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getByContinent(state, action) {
      const copyCountry = [...state.countries];
      const continentFiltered = copyCountry.filter(
        (conti) => conti.continent === action.payload
      );
      state.sorting = action.payload === "all" ? [...copyCountry] : [...continentFiltered];
    },
    getSortSuccess(state, action) {
      let sort = [];
      if (action.payload === "asc") {
        sort = state.sorting.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      }
      if (action.payload === "desc") {
        sort = state.sorting.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      }
      state.sorting = [...sort];
    },
    getChooseActivitySuccess(state, action) {
      const filterByActivity = [...state.sorting].filter(
        (element) => element.activity[0] === action.payload
      );
      state.sorting = [...filterByActivity];
    },
    sortPopulationSuccess(state, action) {
      let populationSort = [];
      if (action.payload === "high") {
        populationSort = state.sorting.sort((a, b) => b.population - a.population);
      }
      if (action.payload === "low") {
        populationSort = state.sorting.sort((a, b) => a.population - b.population);
      }
      state.sorting = [...populationSort];
    },
    cleanFilters(state) {
      state.sorting = [...state.countries];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
        state.sorting = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getByName.fulfilled, (state, action) => {
        state.sorting = [action.payload];
      })
      .addCase(getById.fulfilled, (state, action) => {
        const countryId = state.countries.filter(
          (county) => county.id === action.payload
        );
        state.sorting = [countryId];
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.activities = action.payload;
      });
  },
});

export const {
  getByContinent,
  getSortSuccess,
  getChooseActivitySuccess,
  sortPopulationSuccess,
  cleanFilters,
} = countriesSlice.actions;

export default countriesSlice.reducer;
