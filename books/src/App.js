import { useState } from "react"
import BooKCreate from "./components/BookCreate"

function App () {
    const [books,setBooks] =useState([])
    const createBook =(title) =>{
        console.log("Need to add title:",title);
    }
    
    return (
        <div>
            <BooKCreate onCreate={createBook}/>     
        </div>
    )
}
export default App