export function ShowsWithImg(showsArr) {

  const filteredArr = showsArr.filter(show => show.image !== null);

  return filteredArr

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


// const hasImage = (show) => {
//   return show.img !== null ? show.img : "null";
// }