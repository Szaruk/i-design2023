import axios from "axios";

export default function PostNewsletter(
  name: String,
  email: String,
  isChecked: boolean
) {
  let data = JSON.stringify({
    email: email,
    name: name,
    agreement: isChecked,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Newsletter_Form",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
}
