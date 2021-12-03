import { showMunger, ShowsWithImg } from "../utils/utils.js";


export const fetchShows = async () => {
  //when search is using b/c, no problem
  //when search using any other letter, image is not available
  const response = await fetch(`https://api.tvmaze.com/shows`);

  const data = await response.json();

  const filteredList = ShowsWithImg(data);

  const showList = filteredList.map((show) => showMunger(show));

  return showList;
};
