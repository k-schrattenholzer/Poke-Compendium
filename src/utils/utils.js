export const ShowsWithImg = (showsArr) => {

  const filteredArr = showsArr.filter(show => show.image !== null);

  return filteredArr

}

export const removeTags = (string) => {
  let str = string.toString();

  return str.replace( /(<([^>]+)>)/ig, '');
}

export const showMunger = (show) => {
  return {
    id: show.id,
    name: show.name,
    lang: show.language,
    premiere: show.premiered,
    image: show.image.medium,
    summary: show.summary,
    url: show.url,
  }
}
