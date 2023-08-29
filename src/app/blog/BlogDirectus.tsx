import axios from "axios";

export default function BlogDirectus(numPosts: any) {
  let blogConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      "https://admin.i-design.com.pl/items/Blog_posts/?fields=*.*.*&filter[status]=published&limit=" +
      numPosts,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(blogConfig);
}
