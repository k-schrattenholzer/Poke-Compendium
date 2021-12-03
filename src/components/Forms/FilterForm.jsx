
export default function FilterForm() {


  const sortOptions=['Asc', 'Desc']

  return (
    <div className='FilterForm-Container'>
      <select>
        {
          sortOptions.map(option => <option value={option} key={option}>{option}</option>)
        }
      </select>
      
    </div>
  )
}
