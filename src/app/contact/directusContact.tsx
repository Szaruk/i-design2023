import axios from "axios";

export default function PostContactForm(
  contactName: String,
  contactEmail: String,
  contactMessage: String,
  contactAgreement: boolean
) {
  let contactData = {
    contact_name: contactName,
    contact_email: contactEmail,
    contact_message: contactMessage,
    agreement: contactAgreement,
  };

  let contactConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://admin.i-design.com.pl/items/Contact_Form",
    headers: {
      "Content-Type": "application/json",
    },
    data: contactData,
  };

  return axios.request(contactConfig);
}
