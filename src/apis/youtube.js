import axios from "axios";
const KEY = "AIzaSyB7M-rZXICHQva_BTYJ6oVJrF1UQT0JFgA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
