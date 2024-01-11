const SearchComponent = ({handleSearch}) => {
    return (
        <div className="text-left my-3">
            <span>Cerca: </span>
            <input type="text" onChange={handleSearch}/>
        </div>
    )
}

export default SearchComponent;