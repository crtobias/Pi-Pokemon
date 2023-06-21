import React from 'react'

import './Cards.css'
import Card from '../Card/Card'

function Cards ({allPokemons}){

  return (
    <div className='cards-container'>

    <div class='pokecards'>           
    {allPokemons?.map(pokemon =>(                //mapeo de las props de pokemon solicitadas por el componente cards
    <Card key={pokemon.id} pokemon={pokemon}/>))}
    </div>


    </div>
    
  )
}

export default Cards