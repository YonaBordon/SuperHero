import axios from "axios";

export const getHero = async (id) => {
  const {data: image} = await axios.get(
    `https://superheroapi.com/api.php/458578445914906/${id}/image`
  );
  const {data: powerstats} = await axios.get(
    `https://superheroapi.com/api.php/458578445914906/${id}/powerstats`
  );
  return {imgUrl: image.url, name: image.name, id, powerstats};
};

export const searchByName = (name) => {
  return axios.get(
    `https://superheroapi.com/api.php/458578445914906/search/${name}`
  );
};

export const searchById = (id) => {
  return axios.get(`https://superheroapi.com/api.php/458578445914906/${id}`);
};
