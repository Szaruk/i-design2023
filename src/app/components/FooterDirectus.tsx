import axios from "axios";

export default function FooterDirectus() {
  let footerConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Footer_elements/?fields=*.*.*.*",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(footerConfig);
}
