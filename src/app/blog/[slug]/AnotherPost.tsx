import axios from "axios";

export default function AnotherPost() {
  let anotherPostConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Blog_posts/?fields=*.*.*&limit=3",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(anotherPostConfig);
}
