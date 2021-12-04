/* eslint-disable array-callback-return */
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
  if (string === null ) {
    return false;
  } else{
    let str = string.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }
}



export function ShowsWithImg(showsArr) {
  const filteredArr = showsArr.filter((show) => show.image !== null);

  return filteredArr;
}

export function genreList(showArr) {
  const arrayOfGenreArrays = showArr.map((show) => getGenres(show));

  const combinedArr = flattenArr(arrayOfGenreArrays);

  const uniqueArr = removeDupes(combinedArr);

  const genreList = uniqueArr.sort();
  genreList.unshift('All');


  return genreList;
}

export function getGenres(show) {
  return show.genres;
}

export function findByGenre(showsArr, genre) {
  let showsByGenre = [];

  showsArr.map((show) => {
    const showGenres=show.genres;
    const genreIncluded = showGenres.includes(genre);
    
    if (genreIncluded || genre === 'All') {
      showsByGenre.push(show);
      } else {return null;}
  })
  console.log(showsByGenre);
  return showsByGenre;
}

export function showMunger(show) {
  // console.log(show);
  if (show.image === null ) {
    return false;
  } else return {
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

