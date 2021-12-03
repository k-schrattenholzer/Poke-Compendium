import './Show.css';

export default function Show({ show }) {
//destructure props needed from show
const { id, name, lang, premiere, image, summary, url } = show;

const hasImage = image !== null

  return (
    <div className='Show'>
      <a href={url}>
        { hasImage && <img src={image} alt={id}/>}
        
      </a>
      <h4>{name}</h4>
      <ul>
        <li>lang: {lang}</li>
        <li>premiere: {premiere}</li>
      </ul>
      {summary}
    
    </div>
  )
}
