import { showMunger, ShowsWithImg } from "../utils/utils.js";

export const fetchShows = async () => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=B`);

  const data = await response.json();

  const filteredList = ShowsWithImg(data);

  const showList = filteredList.map(show => showMunger(show));
  
  return showList;
}