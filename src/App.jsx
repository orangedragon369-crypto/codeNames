import { useState } from 'react'
import './App.css'

export default function App() {
  const [width, setWidth] =useState(5);
  const [height, setHeight] =useState(5);
  const [tilePattern, setTilePattern] = useState(Array.from({ length: height }, () => Array(width).fill("#e9c28e"))); 
  const [tTileCount, setTTileCount] = useState(8);
  const [aTileCount, setATileCount] = useState(1);
  const [teamCount, setTeamCount] = useState(2);

  const instructions = `What the tiles mean:
  Black = Assassin
  Blue = Blue Team
  Red = Red Team
  Tan = civilian
  Purple = Exta tile for the team that goes first

Set-Up:  

Set out a 5 by 5 grid of different cards, (nouns, items, cards against humanity answer, what do you meme pictures - just what ever your group decides)
      
Instructions (4+ people ideal, 3 required):

Split the group in two teams (or 3 if only 3). Each team will choose a member to be their operator (one of the 3 people will be both operators if only 3). Only the operator should see the tiles on this screen when in play. The operator will give a one word hint that is not on the board in any way, hyphenated word count as just one, and the number of tiles connected to the hint, ie: water for 3 and the team would look for three tiles that are connected to the hint, the others on their team will then try and guess what 3 tiles are being refferenced.`
  let tiles = [1,1,1,1]
  
  const generateOperatorTile = ()=>{
    setTilePattern(Array.from({ length: height }, () => Array(width>0?width:1).fill("#e9c28e")));
    const tileCounting = Array.from({ length: height }, () => Array(width).fill("#e9c28e"));
    tiles = [aTileCount, Math.floor(teamCount/2),];
    for (let i=0; i<teamCount;i++) tiles.push(tTileCount)
    if(tiles[0]+tiles[1]+tTileCount*teamCount>width*height) return alert(`Invalid tiles count, you have to many tiles to put on the board. ${tiles[0]+tiles[1]+tTileCount*teamCount} tiles on a ${width*height} tile board.`);
    console.log(typeof(width), width)
    console.log(typeof(height), height)
    tiles.map((tile, index)=>{
      for(let i=0,x=0,y=0; i<tile;i++){
        let color;
        switch (index) {
          case 0:
            color = 'black';
            break;
          case 1:
            color = "purple";
            break;
          case 2:
            color = 'blue';
            break;
          case 3:
            color = 'red';
            break;
          case 4:
            color = 'green';
            break;
          case 5:
            color = 'yellow';
            break;
          case 6:
            color = 'orange';
            break;
          default:
        };
        console.log('attemt at ', color)
        console.log(typeof(width), width)
        console.log(typeof(height), height)
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

  function tileType(type){
    switch(type){
      case 'black':
        return(<span className='black'>Assassin</span>);
      case 'blue':
        return(<span className='blue'>Blue Team</span>);
      case 'red':
        return(<span className='red'>Red Team</span>);
      case 'green':
        return(<span className='green'>Green Team</span>);
      case 'yellow':
        return(<span className='yellow'>Yellow Team</span>);
      case 'orange':
        return(<span className='orange'>Orange Team</span>);
      case '#e9c28e':
        return'Civilian';
      default:
        return(<span className='blue'>Flip Case</span>)
    }
  }

  return (<div className='row'>
    <div className='column'>
      <h3>Code Names</h3>
      <label htmlFor='teamCount'> Number of Teams (max 5 - min 2): </label>
      <input id='teamCount' name='teamCount' type='number' value={teamCount} onChange={(event) => setTeamCount(parseInt(event.target.value)>2?parseInt(event.target.value)<5?parseInt(event.target.value):5:2)} placeholder='tiles per team'></input>
      <label htmlFor='tTile'> Tiles per team: </label>
      <input id='tTile' name='tTile' type='number' value={tTileCount} onChange={(event) => setTTileCount(parseInt(event.target.value))} placeholder='tiles per team'></input>
      <label htmlFor='aTile'> Assassin Tiles: </label>
      <input id='aTile' name='aTile' type='number' value={aTileCount} onChange={(event) => setATileCount(parseInt(event.target.value))} placeholder='assassins'></input>
      <label htmlFor='width'> Width of Tile grid: </label>
      <input id='width' name='width' type='number' value={width} onChange={(event) => setWidth(parseInt(parseInt(event.target.value)))} placeholder='width'></input>
      <label htmlFor='height'> Height of Tile grid: </label>
      <input id='height' name='height' type='number' value={height} onChange={(event) => setHeight(parseInt(event.target.value))} placeholder='height'></input>
      <button onClick={()=> {console.log('triggered'); generateOperatorTile()}}>generate operator tiles</button>
      <button onClick={()=> alert(instructions)}>Rules/Instruction</button>
    </div>
    <div>
      {tilePattern.map((tile, index1)=>{
      return(<div key={index1} className="row">
        {tile.map((tile, index2)=>{
          return(<div key={`${index1}${index2}`} className="tile" style={{backgroundColor: tile}}>{tileType(tile)}<input type='checkbox'></input></div>);
        })}
      </div>)
      })}
    </div>
  </div>);
}