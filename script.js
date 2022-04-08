let image = document.querySelector(".image")
let buttons = document.querySelectorAll(".button")
let pokeName = document.querySelector(".pokemon")
let pokeType = document.querySelector(".type")
let pokeID = document.querySelector(".input")
let fwdBtn = document.querySelector(".increase")
let backBtn = document.querySelector(".decrease")
let deletes = document.querySelector(".delete")
let fetchPoke = document.querySelector(".blueCircle2")




buttons.forEach((btn, idx) => {
  btn.addEventListener('click', (b) =>{
    let userInput = b.target.innerText;
    pokeID.append(userInput);
  })
});

fwdBtn.addEventListener('click', () => {
  pokeID.innerHTML++
generatePokemon(pokeID)

})

backBtn.addEventListener('click',() => {
  pokeID.innerHTML--
  generatePokemon(pokeID)
})

deletes.addEventListener('click',() => {
  pokeID.innerText = ""
})

fetchPoke.addEventListener('click', () => generatePokemon(pokeID))


async function generatePokemon(pokeID) {
  let id = pokeID.innerText
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

 if(id<=0 || id>898){
  pokeName.innerText="This is invalid?"
  pokeType.innerText="";
 }
  else{
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.name)
  pokeName.innerText = data.name.toUpperCase()
  pokeType.innerText = data.types[0].type.name.toUpperCase()
  image.src = data.sprites.front_default
}
  }
