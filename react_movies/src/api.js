import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "aa317866a24da16769a04eef0ce72243",
    language: "ko"
  }
});

//경로 앞에 /를 입력하면 절대경로로 인식하여 baseURL 을 삭제한다.
export const MoviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const TVApi = {
  popular: () => api.get("tv/popular"),
  airingThisWeek: () => api.get("tv/on_the_air"),
  airingToday: () => api.get("tv/popular"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export default api;
