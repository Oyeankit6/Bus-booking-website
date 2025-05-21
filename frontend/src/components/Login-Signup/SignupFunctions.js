import axios from "axios";

export function registerUser(newUserDetails) {
  let apiUrl = "https://bus-booking-website-1.onrender.com/register";
  return axios.post(apiUrl, newUserDetails, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
