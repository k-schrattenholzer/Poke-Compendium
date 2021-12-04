import './Controls.css';
import FilterForm from '../Forms/FilterForm.jsx';
import SearchForm from '../Forms/SearchForm.jsx';

export default function Controls({ genres,  selectedGenre, genreChange, handleSearch, searchTerm, handleSearchChange }) {
  return (
    <div className='Controls-Container'>
      <FilterForm genres={genres} selectedGenre={selectedGenre} genreChange={genreChange} />
      <SearchForm searchTerm={searchTerm} handleSearch={handleSearch} handleSearchChange={handleSearchChange} />
    </div>
  )
}
