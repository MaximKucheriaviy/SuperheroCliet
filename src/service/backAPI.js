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

export const editHeroTextData = async (field, id, value) => {
  try {
    const result = await axios.patch(`/hero/info/${field}`, {
      id,
      value,
    });
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createHero = async (data) => {
  try {
    const result = await axios.post("/hero", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result.data.data;
  } catch (err) {
    console.log("create user axios error");
    console.log(err);
  }
};
