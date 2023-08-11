import axios from "axios";

export default function PostDetailsDirectus({params}: {params: { slug: string}}){
    let postDetailsConfig = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://admin.i-design.com.pl/items/Blog_posts/?fields=*.*.*&filter[post_slug]="+params.slug,
        headers: {
          "Content-Type": "application/json",
        },
      };
      return axios.request(postDetailsConfig);
    }