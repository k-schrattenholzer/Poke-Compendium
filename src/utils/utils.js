export const ShowsWithImg = (showsArr) => {

  const filteredArr = showsArr.filter(show => show.image !== null);

  return filteredArr

}

export const removeTags = (string) => {
  let str = string.toString();

  return str.replace( /(<([^>]+)>)/ig, '');
}

export const genreList = (showArr) => {

  const arrayOfGenreArrays = showArr.map((show) => getGenres(show));

  const combinedArr = flattenArr(arrayOfGenreArrays);

  const uniqueArr = removeDupes(combinedArr);

  return uniqueArr;

}
export const getGenres = (show) => {
  return show.genres
  }

export const flattenArr = (arr) => {

  let flatArr = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
  }, []);

  return flatArr;
}

export const removeDupes = (arr) => {
  const noDupes = [...new Set(arr)];

  return noDupes;
}

export const showMunger = (show) => {
  return {
    id: show.id,
    name: show.name,
    lang: show.language,
    premiere: show.premiered,
    image: show.image.medium,
    summary: removeTags(show.summary),
    url: show.url,
  }
}
