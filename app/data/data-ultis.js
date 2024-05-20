import { data } from "./data";

export const getGamesByCategory = (category) => {
  return data.filter((game) => {
    return game.category.find((item) => {
      return item.name === category;
    });
  });
};

// export const getGamesById = (id) => {
//   return data.find((item) =>
//     item.id === Number(id)
//   );
// };
export const getGameById = (id) => {
  return data.find((game) => game.id === Number(id));
}