import { genreList, showMunger, ShowsWithImg } from "../utils/utils.js";


export const fetchShows = async () => {

  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();

  const filteredList = ShowsWithImg(data);

  const showList = filteredList.map((show) => showMunger(show));

  return showList;
};

export const fetchGenres = async () => {

  const response = await fetch(`https://api.tvmaze.com/shows`);
  
  const data = await response.json();

  const genres = genreList(data);

  return genres;

}
