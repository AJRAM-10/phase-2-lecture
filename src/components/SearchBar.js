
function SearchBar({ handleSearch }) {
    return (
        <input 
            type="text"
            placeholder="Search"
            onChange={handleSearch}
        />
    )
}

export default SearchBar;