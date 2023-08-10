import axios from "axios";

export default function SocialResponsibility() {
  let socialResponsibilityConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Social_responsibility",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.request(socialResponsibilityConfig);
}
