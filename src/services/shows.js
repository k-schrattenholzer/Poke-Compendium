import { genreList, showMunger } from "../utils/utils.js";

export const fetchShows = async () => {
  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();
  console.log(data);

  const showList = data
    .filter(show => show.image)
    .filter(show => show.genres)
    .map((showObj) => showMunger(showObj));
  
  console.log(showList);

  return showList;
};

export const fetchSearchedShow = async (query) => {
  const search = query.toLowerCase();

  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${search}`
  );

  const data = await response.json();
  console.log('search fetch data', data);

  const filteredShowList = data
    .filter((showObj) => showObj.show.image)
    .filter((showObj) => showObj.show.genres)
    .map((showObj) => showMunger(showObj.show));

  return filteredShowList;
};

export const fetchGenres = async () => {
  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();

  const genres = genreList(data);

  return genres;
};
