import axios from "axios";

export default function OurValues() {
  let ourValuesConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Our_values",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(ourValuesConfig);
}
