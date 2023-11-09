// fetch ( "https://pokeapi.co/api/v2/pokemon/890" )
//  .then(response => response.json())
//  .then (data => {
//      console.log(data)
//      console.log(data.name)
//     console.log(data.types[0].type.name)
//      console.log(data.height/10)
//      console.log ( "${data.name} pesa es  ${data.weight/10} kilos ") 
//      console.log (data.sprites.front_default)
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

const container = document.querySelector(`.container`)

// template html
const templatepokemon = (pokemon) => {
    const {name, sprites, weight, height, types} = pokemon
    container.innerHTML = `
    <div class= "card">
    <img src='${sprites.front_default}' class="card-img">
<h2 class= "card-title">${name}</h2>
<div class=flexing>
<p class="card-button" > Tipo: ${types[0].type.name} y ${types[1].type.name}<p/>
<p class="card-button" > Peso: ${weight/10} Kilos <p/>
<p class="card-button" > Altura: ${height/10} metros <p/>
<div/>
</div>

    `
}

// Renderizar pokemon 

const renderPokemon= async () => {
    const pokemon = await getpokemon ()
    templatepokemon(pokemon)

}
renderPokemon()
    // container.innerHTML = `
    // <h2 class="card-title">${pokemon.name}</h2>
    // <img src =${pokemon.sprites.front_default} > 
    


    
    