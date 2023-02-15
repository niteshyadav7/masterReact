import ImageList from "./component/ImageList"
import SearchBar from "./component/SearchBar";
import searchImages from "./api"
import { useState } from "react";

function App () {
    const [images,setImages] =useState([]);
    
    const handleSubmit =async (term) => {
        // console.log("Do a search",term);
       const result= await searchImages(term)
    //    console.log(results);
    setImages(result)
    // console.log(result);
        
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images}/>
        </div>
    )
}
export default App

