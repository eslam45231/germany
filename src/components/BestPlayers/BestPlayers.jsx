import React, { useState } from 'react'
import   './BestPlayers.css'
import oliver from  './OLIVER.jpeg'
import { players } from '../../Data/Players'

export default function BestPlayers() {
  const [selected, setselected] = useState(0)
  const lengthPlayers=players.length-1

  return (
    <div className='BestPlayers'>
        <img src={players[selected].img} alt="" />
        <div className="LAYOUTPLAYERS">
          <div className="rightBtnplayers "  >
          <p 
          
          
          onClick={()=>{selected===0?setselected(lengthPlayers):setselected(selected-1)}}

          
          id='btnplay'><i class="fa-solid fa-angle-left"></i></p>

          </div>
      <div className="textPlayers">
      <h1>{players[selected].name}</h1>
            <p>{players[selected].para}</p>
      </div>
        
        <div className="rightbtnsPlayers " >
          <p
          
          onClick={()=>{selected===lengthPlayers?setselected(0):setselected(selected+1)}}
          
          
          id='btnplay'><i class="fa-solid fa-angle-right"></i></p>

        </div>
        </div>


    </div>
  )
}
