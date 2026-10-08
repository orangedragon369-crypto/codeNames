import { useState } from 'react'
import './App.css'
import DisplayTiles from './DisplayTiles';

export default function App() {
  const [randomTiles, setRandomTiles] = useState([]);
  const [tTileCount, setTTileCount] = useState(0);
  const [aTileCount, setATileCount] = useState(0);

  const generateOperatorTile = ()=>{
    let newList = addTiles(addTiles(addTiles(addTiles([], "#000000", parseInt(aTileCount)), "#0000ff", parseInt(tTileCount)+1), "#ff0000", parseInt(tTileCount)), "#e1bda1", 25-parseInt(tTileCount)*2-1-parseInt(aTileCount));
    setRandomTiles(newList);
  };

  function addTiles(array, typeToAdd, count){
    const newArray = array;
    for(let i = 0; i < count; i++){
      newArray.push(typeToAdd);
    }
    return newArray;
  };

  return (<div>
    <label htmlFor='tTile'> Tiles per team: </label>
    <input id='tTile' name='tTile' type='number' value={tTileCount} onChange={(event) => setTTileCount(event.target.value)} placeholder='tiles per team'></input>
    <label htmlFor='aTile'> Assassin Tiles: </label>
    <input id='aTile' name='aTile' type='number' value={aTileCount} onChange={(event) => setATileCount(event.target.value)} placeholder='assassins'></input>
    <button onClick={()=> {console.log('triggered'); generateOperatorTile()}}>generate operator tiles</button>
    <DisplayTiles tiles={randomTiles}/>
  </div>);
}