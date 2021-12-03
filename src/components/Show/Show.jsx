
import { removeTags } from '../../utils/utils.js';
import './Show.css';

export default function Show({ show }) {
//destructure props needed from show
const { id, name, lang, premiere, image, summary, url } = show;


const hasImage = image !== null

const summaryString = removeTags(summary);

  return (
    <article className='Show' key={id}>
      <a href={url}>
        { hasImage && <img src={image} alt={id}/>}
      </a>
      <div>
        <h4>{name}</h4>
        <ul>
          <li key={id*5} ><b>language</b> {lang}</li>
          <li key={id*6}><b>premiere</b>: {premiere}</li>
        </ul>
        <p>{summaryString}</p>
      </div>
    
    </article>
  )
}
