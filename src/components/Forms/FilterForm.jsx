
export default function FilterForm({ genres,  selectedGenre, genreChange, sortDir, sortChange }) {

  const sortOptions=['Asc', 'Desc']


  return (
    <div className='FilterForm-Container'>
      <select
        value={selectedGenre}
        onChange={(e) => genreChange(e.target.value)}>
        {
          genres.map(genre => <option value={genre} key={genre}>{genre}</option>)
        }
      </select>

      <select
      value={sortDir}
      onChange={(e) => sortChange(e.target.value)}>
        {
          sortOptions.map(option => <option value={option} key={option}>{option}</option>)
        }
      </select>
      
    </div>
  )
}
