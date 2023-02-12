import { useState } from "react"


function BooKCreate ({onCreate}) {
    const [title,setTitle] =useState("")
    const handleChange =(event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        setTitle('')
        
    }
    return (
        <div>
            <form className="book-create" onSubmit={handleSubmit}>
                <h3>Add Books </h3>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button" >Create!</button>
            </form>
        </div>
    )
}
export default BooKCreate