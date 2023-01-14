import axios from "axios";
const BASE_URL =
  "https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=";
// const url = "channels"
const options = {
  url: BASE_URL,
  //   params: { part: "snippet,statistics", id: "UCfgZg9Vl5AwedH14BYgLXTQ" },

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchApi = async (channelId) => {
  const  data  = await axios.get(`${BASE_URL}${channelId}`, options);
  console.log("misbah");
  // console.log(data.data);
  return data.data;
};

// https://youtube-v31.p.rapidapi.com/channel?part=snippet,statistics&id=UCfgZg9Vl5AwedH14BYgLXTQ
