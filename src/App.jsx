import { useState } from 'react'
import './App.css'

export default function App() {
  const [width, setWidth] =useState(5);
  const [height, setHeight] =useState(5);
  const [tilePattern, setTilePattern] = useState(Array.from({ length: height }, () => Array(width).fill("#e9c28e"))); 
  const [tTileCount, setTTileCount] = useState(8);
  const [aTileCount, setATileCount] = useState(1);

  let tiles = [1,1,1,1]
  
  const generateOperatorTile = ()=>{
    const tileCounting = Array.from({ length: height }, () => Array(width).fill("#e9c28e"));
    tiles = [parseInt(aTileCount), parseInt(tTileCount), parseInt(tTileCount), 1];
    tiles.map((tile, index)=>{
      for(let i=0,x=0,y=0; i<tile;i++){
        let color;
        switch (index) {
          case 0:
            color = 'black';
            break;
          case 1:
            color = 'blue';
            break;
          case 2:
            color = 'red';
            break;
          case 3:
            color = "purple";
            break;
          default:
        };
        console.log('attemt at ', color)
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        if (tileCounting[y][x]==='#e9c28e'){
          tileCounting[y][x]=color;
        } else {
          i--
        }
      }
      console.log(tileCounting)
    })
    console.log(tileCounting)
    setTilePattern(tileCounting);
  };
  return (<div>
    <h3>Code Names</h3>
    <label htmlFor='tTile'> Tiles per team: </label>
    <input id='tTile' name='tTile' type='number' value={tTileCount} onChange={(event) => setTTileCount(event.target.value)} placeholder='tiles per team'></input>
    <label htmlFor='aTile'> Assassin Tiles: </label>
    <input id='aTile' name='aTile' type='number' value={aTileCount} onChange={(event) => setATileCount(event.target.value)} placeholder='assassins'></input>
    {/* <label htmlFor='width'> Width of Tile grid: </label>
    <input id='width' name='width' type='number' value={width} onChange={(event) => setWidth(event.target.value)} placeholder='width'></input>
    <label htmlFor='height'> Height of Tile grid: </label>
    <input id='height' name='height' type='number' value={height} onChange={(event) => setHeight(event.target.value)} placeholder='height'></input> */}
    <button onClick={()=> {console.log('triggered'); generateOperatorTile()}}>generate operator tiles</button>
    <button onClick={()=> alert(`What the tiles mean:
  Black = Assassin
  Blue = Blue Team
  Red = Red Team
  Tan = civilian
  Purple = Exta tile for the team that goes first

Set-Up:  

Set out a 5 by 5 grid of different cards, (nouns, items, cards against humanity answer, what do you meme pictures - just what ever your group decides)
      
Instructions (4+ people ideal, 3 required):

Split the group in two teams (or 3 if only 3). Each team will choose a member to be their operator (one of the 3 people will be both operators if only 3). Only the operator should see the tiles on this screen when in play. The operator will give a one word hint that is not on the board in any way, hyphenated word count as just one, and the number of tiles connected to the hint, ie: water for 3 and the team would look for three tiles that are connected to the hint, the others on their team will then try and guess what 3 tiles are being refferenced.
      `)}>Rules/Instruction</button>
    <div>
      {tilePattern.map((tile, index1)=>{
      return(<div key={index1} className="row">
        {tile.map((tile, index2)=>{
          return(<div key={`${index1}${index2}`} className="tile" style={{backgroundColor: tile}}></div>);
        })}
      </div>)
      })}
    </div>
  </div>);
}