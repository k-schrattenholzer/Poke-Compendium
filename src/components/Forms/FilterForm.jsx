
export default function FilterForm({ genres }) {

  const sortOptions=['Asc', 'Desc']

  return (
    <div className='FilterForm-Container'>
      <select>
        {
          genres.map(genre => <option value={genre} key={genre}>{genre}</option>)
        }
      </select>

      <select>
        {
          sortOptions.map(option => <option value={option} key={option}>{option}</option>)
        }
      </select>
      
    </div>
  )
}
