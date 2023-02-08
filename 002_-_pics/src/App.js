import SearchBar from "./components/SearchBar";


function App() {
  const handleClick =(term) =>{
    console.log("click",term);
  }
  return (
    <SearchBar onSubmit={handleClick}/>
  )
}

export default App;
