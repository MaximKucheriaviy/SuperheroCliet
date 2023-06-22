import axios from "axios";
axios.defaults.baseURL = "https://superhero-server-we7h.onrender.com";

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

export const addImages = async (data) => {
  try {
    const result = await axios.patch("/hero/image", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result.data;
  } catch (err) {
    console.log("create user axios error");
    console.log(err);
  }
};

export const deleteImage = async (id, imageId) => {
  try {
    const result = await axios.patch(`/hero/image/${imageId}`, {
      id,
    });
    return result.data;
  } catch (err) {
    console.log("create user axios error");
    console.log(err);
  }
};

export const delereHero = async (id) => {
  try {
    const result = await axios.delete(`/hero/${id}`);
    return result.data;
  } catch (err) {
    console.log("create user axios error");
    console.log(err);
  }
};
