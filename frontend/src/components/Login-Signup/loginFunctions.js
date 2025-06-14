import axios from "axios";

export function logUserIn(userCredentials) {
  let apiUrl = "https://bus-booking-website-d6b1.onrender.com/login";
  return axios.post(apiUrl, userCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function loadRoutes() {
  const authToken = sessionStorage.getItem("authToken" || "");
  let apiUrl = `https://bus-booking-website-d6b1.onrender.com/user/profile?secret_token=${authToken}`;
  return axios.get(apiUrl);
}

export function getCurrentUserDetails(authToken) {
  const token = authToken;
  let apiUrl = `https://bus-booking-website-1.onrender.com/user/profile?secret_token=${token}`;
  return axios.get(apiUrl);
}
