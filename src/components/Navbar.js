import SearchBar from "./SearchBar"

function Navbar({ handleSearch }) {
    return (
        <div className="navbar">
            Community Zoo
    
            <SearchBar handleSearch={handleSearch} />
        </div>
    )
}

export default Navbar