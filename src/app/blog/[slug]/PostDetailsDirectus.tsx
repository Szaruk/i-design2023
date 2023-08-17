import axios from "axios";

export default function PostDetailsDirectus(slug: any) {
  let postDetailsConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      "https://admin.i-design.com.pl/items/Blog_posts/?fields=*.*.*&filter[post_slug]=" +
      slug,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(postDetailsConfig);
}
