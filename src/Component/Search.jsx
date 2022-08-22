

const Search = ({text,setText}) => {
   
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        {/* <button>Search</button> */}
    </div>
  )
}

export default Search