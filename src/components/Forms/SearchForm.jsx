
export default function SearchForm({ handleSearch, searchTerm, handleSearchChange }) {
  return (
    <div>
      <form aria-label="searchForm" onSubmit={handleSearch}>
        Search
        <input
        type='text'
        onChange={(e) => handleSearchChange(e.target.value)}
        value={searchTerm}/>
        <button type='submit'>try me</button>
      </form>
    </div>
  )
}
