import axios from "axios";

export default function BlogDirectus() {
  let blogConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Blog_posts/?fields=*.*.*",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(blogConfig);
}
