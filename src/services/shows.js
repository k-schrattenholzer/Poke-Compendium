import { genreList, showMunger, ShowsWithImg } from "../utils/utils.js";


export const fetchShows = async () => {

  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();

  const filteredList = ShowsWithImg(data);

  console.log('FILTERED LIST ON LOAD', filteredList)

  const showList = filteredList.map((show) => showMunger(show));
   console.log(showList);
  return showList;
};

export const fetchSearchedShow = async (query) => {
  const search = query.toLowerCase();

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);

  const data = await response.json();

  // console.log(data);

  const filteredList = ShowsWithImg(data);

  // console.log('filtered list', filteredList);

  const showList = filteredList.map((show) => showMunger(show));

  return showList;
};

export const fetchGenres = async () => {

  const response = await fetch(`https://api.tvmaze.com/shows`);
  
  const data = await response.json();

  const genres = genreList(data);

  return genres;

}

