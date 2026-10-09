import { useState } from 'react'
import './App.css'

export default function App() {
  const [width, setWidth] =useState(5);
  const [height, setHeight] =useState(5);
  const [tilePattern, setTilePattern] = useState(Array.from({ length: height }, () => Array(width).fill("#e9c28e"))); 
  const [tTileCount, setTTileCount] = useState(0);
  const [aTileCount, setATileCount] = useState(0);
  
  let tiles = [1,1,1]
  const tileCounting = tilePattern;

  const generateOperatorTile = ()=>{
    tiles = [parseInt(aTileCount), parseInt(tTileCount)+1, parseInt(tTileCount)];
    tiles.map((tile, index)=>{
      if(tile==0)return'#e9c28e';
      let color = '#e9c28e';
      switch (index) {
        case 0:
            color = 'black';
        case 1:
            color = 'blue';
        case 2:
            color = 'red';
        default:
      }
      for(let i=0,x=0,y=0; i<tile;i++){
        console.log('attemt at ', color)
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        if (tileCounting[y,x]==='#e9c28e'){
            tileCounting[y,x]=color;
        }
      }
    })
    setTilePattern(tileCounting);
  };



  return (<div>
    <label htmlFor='tTile'> Tiles per team: </label>
    <input id='tTile' name='tTile' type='number' value={tTileCount} onChange={(event) => setTTileCount(event.target.value)} placeholder='tiles per team'></input>
    <label htmlFor='aTile'> Assassin Tiles: </label>
    <input id='aTile' name='aTile' type='number' value={aTileCount} onChange={(event) => setATileCount(event.target.value)} placeholder='assassins'></input>
    {/* <label htmlFor='width'> Width of Tile grid: </label>
    <input id='width' name='width' type='number' value={width} onChange={(event) => setWidth(event.target.value)} placeholder='width'></input>
    <label htmlFor='height'> Height of Tile grid: </label>
    <input id='height' name='height' type='number' value={height} onChange={(event) => setHeight(event.target.value)} placeholder='height'></input> */}
    <button onClick={()=> {console.log('triggered'); generateOperatorTile()}}>generate operator tiles</button>
    <div>
        {tileCounting.map((tile, index1)=>{
            return(<div key={index1} className="row">
                {tile.map((tile, index2)=>{
                    return(<div key={`${index1}${index2}`} className="tile" style={{backgroundColor: tile}}>{tile}</div>);
                })}
            </div>)
        })}
    </div>
  </div>);
}