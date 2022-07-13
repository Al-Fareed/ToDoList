const SearchItem=({search,setSearch})=>{
    return(
        <form 
        className="searchForm"
        onSubmit={(e)=>e.preventDefault()}
        >
            <input 
            type="text" name="" 
            id="searchbox" 
            placeholder="Search Item"
            role='search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

        </form>
    )
}
export default SearchItem