let image = document.querySelector(".image")
let buttons = document.querySelectorAll(".button")
let pokeName = document.querySelector(".pokemon")
let pokeType = document.querySelector(".type")
let pokeID = document.querySelector(".input")
let fwdBtn = document.querySelector(".incDec")
let backBtn = document.querySelector(".decrease")
let delete = document.querySelector(".delete")

generatePokemon()









function generatePokemon() {
  const config = {
    headers: {
      "Accept" : "application/json"
    }

  }

  const res = await fetch("https://pokeapi.co/api/v2/pokemon",config)
  const data = await res.json()
  console.log(data)
}
