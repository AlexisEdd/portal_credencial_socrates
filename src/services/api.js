import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://msg-auto-credeciales-server.lwmhph.easypanel.host/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;