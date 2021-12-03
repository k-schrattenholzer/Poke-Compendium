import './Controls.css';
import FilterForm from '../Forms/FilterForm.jsx';

export default function Controls({ genres,  selectedGenre, genreChange, sortDir, sortChange}) {
  return (
    <div className='Controls-Container'>
      <FilterForm genres={genres} />
    </div>
  )
}
