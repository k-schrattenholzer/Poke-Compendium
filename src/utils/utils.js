export function ShowsWithImg(showsArr) {

  const filteredArr = showsArr.filter(show => show.img !== null);
  return filteredArr

}

export const showMunger = (show) => {
  return {
    id: show.show.id,
    name: show.show.name,
    lang: show.show.language,
    premiere: show.show.premiered,
    image: show.show.image.medium,
    summary: show.show.summary,
    url: show.show.url,
  }
}