import React from "react";
import {useGlobalContext} from '../Hooks/Context/Context'
const Search = () => {
const { query,searchPost} = useGlobalContext();



  return (
    <div>
      <form onSubmit={(e) => e.preventDefault() } className="flex items-center justify-center p-6" >
        <div className="input-group w-96 flex items-center justify-center gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
            placeholder="search for the latest news update"
            className=""
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
