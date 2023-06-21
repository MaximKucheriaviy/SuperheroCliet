import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

export const getAllHeros = async (page = 1) => {
  try {
    const result = await axios.get("/hero", {
      params: {
        page,
      },
    });
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getHeroByID = async (id) => {
  try {
    const result = await axios.get(`/hero/${id}`);
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
