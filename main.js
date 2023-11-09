// fetch ( "https://pokeapi.co/api/v2/pokemon/890" )
//  .then(response => response.json())
//  .then (data => {
//      console.log(data)
//      console.log(data.name)
//     console.log(data.types[0].type.name)
//      console.log(data.height/10)
//      console.log ( "${data.name} pesa es  ${data.weight/10} kilos ") 
//      console.log (data.photo)
//  }
// )

// .catch(err => console.log (err))

const getpokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/890")

     // console.log(response)

const data = await response.json()
// console.log(`${data.name} es tipo ${data.types[0].type.name} pesa ${data.height/10} kilos`)

return data
        
    } catch (error) {
        throw new error("El error es ${error}")
        
    }
    
}

// getpokemon()

// traemos contenedor
const container =document.querySelector(".container")

// Renderizar pokemon 

const renderpokemon= async () => {
    const pokemon = await getpokemon ()

    container.innerHTML = `
    <h2>${pokemon.name}</h2>`
    
    
    

}

renderpokemon()