import { genreList, showMunger, ShowsWithImg } from "../utils/utils.js";

export const fetchShows = async () => {
  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();

  // const filteredList = ShowsWithImg(data);

  // console.log('FILTERED LIST ON LOAD', filteredList)

  const showList = data.filter((show) => show.image !== null || show.genres !== null).map((show) => showMunger(show));
  //  console.log(showList);
  return showList;
};

export const fetchSearchedShow = async (query) => {
  const search = query.toLowerCase();

  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${search}`
  );

  const data = await response.json();
  console.log('DATA', data);

  const showsWithImg = data.filter((showObj) => showObj.show.image);
  console.log(showsWithImg);

  const showsWithGenres= showsWithImg.filter((showObj) => showObj.show.genres);

  const showList = showsWithGenres.map((show) => showMunger(show.show));

  // const filteredList = ShowsWithImg(data);

  // console.log('filtered list', filteredList);

  // const showList = data.filter((show) => show.image !== null || show.genres !== null).map((show) => showMunger(show.show));

  return showList;
};

export const fetchGenres = async () => {
  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();

  const genres = genreList(data);

  return genres;
};
