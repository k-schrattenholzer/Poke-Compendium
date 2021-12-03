import './Controls.css';
import FilterForm from '../Forms/FilterForm.jsx';

export default function Controls({ handleSubmit, setGenres, selectedGenre, setSelectedGenre}) {
  return (
    <div className='Controls-Container'>
      <FilterForm />
    </div>
  )
}
