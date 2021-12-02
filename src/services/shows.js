export const fetchShows = async () => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=A`);

  const showList = response.json();
  
  return showList;
}