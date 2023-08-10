import axios from "axios";

export default function ContactPerson() {
  let contactPersonConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Contact_person",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.request(contactPersonConfig);
}
