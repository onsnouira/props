import React from 'react'
import players from './players'
import Player from './Player'

const PlayersList = () => {
  return (
    <div className='list'>
      {players.map((player)=> <Player player={player}/>)}
    </div>
  )
}

export default PlayersList
