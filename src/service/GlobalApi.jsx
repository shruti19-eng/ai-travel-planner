import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
};

export const GetPlaceDetails = (query) =>
  axios.get(BASE_URL, {
    ...config,
    params: {
      query: query,   // dynamic place name
      per_page: 12,   // number of photos to fetch
    },
  });
