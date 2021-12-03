
import './Show.css';

export default function Show({ show }) {

const { id, name, lang, premiere, image, summary, url, genres } = show;

  return (
    <div className='Show' key={id}>
      <a href={url}>
        <img src={image} alt={id}/>
      </a>
      <div>
        <h4>{name}</h4>
        <ul>
          <li>
            <b>language</b> {lang}</li>
          <li>
            <b>premiere</b>: {premiere}</li>
          <li>
            <b>genre</b>
            {genres.map((genre)=><p>{genre}</p>)}
          </li>
          <li>{summary}</li>
        </ul>
        
      </div>
    
    </div>
  )
}
