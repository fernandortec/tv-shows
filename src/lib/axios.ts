import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.tvmaze.com",
	withCredentials: true,
});
