const Search = ({search, handleSearch}) =>{
    function removeTag(tag) {
        let mySearch = search.filter(item => {return item !== tag})
        handleSearch(mySearch)
    }
    function clear() {
        handleSearch([])
    }
    return(
        <div className="d-flex mb-5 container search-box">
            {
                search.map(tag =>{
                    return(
                        <div className="search-tag">
                            <span className="src-tag">{tag}</span>
                            <span onClick={() => removeTag(tag)} className="x">X</span>
                        </div>
                    )
                })
            }
            <span onClick={clear} className={`${search.length > 0 ? 'clr-flex' : 'disabled'}`}>Clear</span>
        </div>
    )
}
export default Search