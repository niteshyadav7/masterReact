import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimals = () => {
  const animals = ["cow", "goat", "gator", "buffalo","Hippo"];
     return animals[Math.trunc(Math.random()*animals.length)]
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
  setAnimals([...animals,getRandomAnimals()])
  }
  const render=animals.map((animal,index)=>{
    return <AnimalShow type={animal} key={index}/>
  })

  return (
    <div>
      <button onClick={handleClick}>Animals</button>
      <div>{render}</div>
    </div>
  );
}
export default App;