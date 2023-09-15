import axios from "axios";
async function getMe() {
  try {
    const { data } = await axios.get("/api/me");
    return {
      data,
      error: null,
    };
  } catch (e) {
    return {
      data: null,
      error: true,
    };
  }
}

export { getMe };