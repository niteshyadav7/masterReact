const randomAnimal=()=>{
    const animals =['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.trunc(Math.random()*animals.length)]
  }
  console.log(randomAnimal());
  