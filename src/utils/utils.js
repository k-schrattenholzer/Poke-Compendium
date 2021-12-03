function flattenArr(arr) {
  let flatArr = arr.reduce((acc, curVal) => {
    return acc.concat(curVal);
  }, []);

  return flatArr;
}

function removeDupes(arr) {
  const noDupes = [...new Set(arr)];

  return noDupes;
}

function removeTags(string) {
  let str = string.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
}

export function ShowsWithImg(showsArr) {
  const filteredArr = showsArr.filter((show) => show.image !== null);

  return filteredArr;
}

export function genreList(showArr) {
  const arrayOfGenreArrays = showArr.map((show) => getGenres(show));

  const combinedArr = flattenArr(arrayOfGenreArrays);

  const uniqueArr = removeDupes(combinedArr);

  uniqueArr.unshift('All');

  return uniqueArr;
}

export function getGenres(show) {
  return show.genres;
}

export function getGenreShows(showsArr, selectedGenre) {
  showsArr.forEach((show) => {
    // console.log('---show---', show)
    const showGenres=show.genres;
    // console.log('__SHOW GENRES___', show.genres)
    // console.log('SELECTED GENRE___', selectedGenre)
    const showInList = showGenres.includes(selectedGenre);
    // console.log(showInList);
    if (showInList || selectedGenre === 'All') {
      return show;
    } else {
      return null;
    }
  });
}

export function showMunger(show) {
  return {
    id: show.id,
    name: show.name,
    lang: show.language,
    premiere: show.premiered,
    image: show.image.medium,
    summary: removeTags(show.summary),
    url: show.url,
    genres: show.genres
  };
}
