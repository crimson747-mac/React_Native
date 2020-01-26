import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "aa317866a24da16769a04eef0ce72243",
        language: "ko",
    }
});

export const MoviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("/movie/popular"),

};

export const TVApi = {
    topRated: () => api.get("/tv/top_rated"),
    popular: () => api.get("/tv/popular"),
    airingToday: () => api.get("/tv/popular")
};

export default api;