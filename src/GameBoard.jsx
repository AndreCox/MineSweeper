import React, { useState, useEffect, Component} from 'react';

let tiles = new Array();

class tile  {
  visible = false;
  bomb = false;
  flagged = false;
  adjacent = 0;
  constructor(visible, bomb, flagged, adjacent) {
    this.visible = visible;
    this.bomb = bomb;
    this.flagged = flagged;
    this.adjacent = adjacent;
  }
}


let renderTiles = new Array();
let renderGrid = new Array();

class Tile extends Component {

  constructor(props, renderIcon) {
  super(props);
  }

  render() {
    this.renderIcon = 0;
    if (this.props.props === -1) {
      this.renderIcon = "⛏"
    } else if (this.props.props >= 0) {
      this.renderIcon = this.props.props
    } else if (this.props.props === -2) {
      this.renderIcon = "🚩"
    } else if (this.props.props === -3) {
      this.renderIcon = "💣"
    }
    else 
    {
      this.renderIcon = 0;
    }
    return (
    <div className="flex flex-col items-center justify-center p-1 m-1 mb-0 bg-slate-400 rounded-lg drop-shadow-xl transition-all hover:bg-slate-500" >
      <label className="text-md"> {this.renderIcon} </label>
    </div>
    );
  }
}

function Grid(props) {
  renderTiles = [];
  renderGrid = [];
  let bombcount = 0;
  for (let j = 0; j < props.props[1]; j++) {
    tiles[j] = [];
      for (let i = 0; i < props.props[0]; i++) {
      let tileData = new tile(false, false, false, 0);
      tiles[j][i] = tileData;
      renderTiles.push(<Tile key={j * 5 + i} props={-1} />);
      }
      renderGrid.push(<div key={j} className="flex flex-row items-center justify-center">{renderTiles}</div>);
      renderTiles = [];
  }
  //loop through the tiles array and randomly generate bombs until the number of bombs is equal to the number of bombs specified
  bombcount = 0;

  while (bombcount < props.props[2]) {
    let x = Math.floor(Math.random() * props.props[0]);
    let y = Math.floor(Math.random() * props.props[1]);
    //let pickedTile = tiles[y]
    //pickedTile = pickedTile[x].bomb;
    if ((tiles[y][x]).bomb === false) {
      console.log("bomb placed at " + x + " " + y);
      (tiles[y][x]).bomb = true;
    }
    bombcount++;
    }
  //loop through the tiles array and set the adjacent bomb count for each tile
  for (let j = 0; j < props.props[1]; j++) {
    for (let i = 0; i < props.props[0]; i++) {
      if ((tiles[j][i]).bomb !== true) {
          //look at the tiles around the current tile and count the number of bombs then set the adjacent bomb count for the current tile
          let adjacent = 0;
          if (j > 0) {
            if (i > 0) {
              if ((tiles[j - 1][i - 1]).bomb === true) {
                adjacent++;
              }
            }
            if ((tiles[j - 1][i]).bomb === true) {
              adjacent++;
            }
            if (i < props.props[0] - 1) {
              if ((tiles[j - 1][i + 1]).bomb === true) {
                adjacent++;
              }
            }
          }
          if (i > 0) {
            if ((tiles[j][i - 1]).bomb === true) {
              adjacent++;
            }
          }
          if (i < props.props[0] - 1) {
            if ((tiles[j][i + 1]).bomb === true) {
              adjacent++;
            }
          }
          if (j < props.props[1] - 1) {
            if (i > 0) {
              if ((tiles[j + 1][i - 1]).bomb === true) {
                adjacent++;
              }
            }
            if ((tiles[j + 1][i]).bomb === true) {
              adjacent++;
            }
            if (i < props.props[0] - 1) {
              if ((tiles[j + 1][i + 1]).bomb === true) {
                adjacent++;
              }
            }
          }
        }
      }
    }
    if (bombcount > 0){
    console.log(tiles);
    }
  return (
      <div>
          {renderGrid}
      </div>
  );
}

//create a gameboard that will be used to store the tiles that displays them in a grid
function GameBoard(props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-slate-300 rounded-lg drop-shadow-2xl pb-1 m-8">
            <Grid props={props.props}/>
      </div>
    </div>
  );
}

export default GameBoard;
export { Grid };
