import ReactDOM from 'react-dom';
import './index.css';
import React from "react";

class Game extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      board: null,
    };
  }

  initBoard() {
    let board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    board = this.placeRandom(this.placeRandom(board));
    this.setState({board});
  }

  getBlankCoordinates(board) {
    const blankCoordinates = [];

    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === 0) {blankCoordinates.push([r, c])}
      }
    }

    return blankCoordinates;
  }

  randomStartingNumber() {
    const startingNumbers = [2,4];
    const randomNumber = startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
    return randomNumber;
  }

  placeRandom(board) {
    const blankCoordinates = this.getBlankCoordinates(board);
    const randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
    const randomNumber = this.randomStartingNumber();
    board[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
    return board;
  }

  componentWillMount() {
    this.initBoard();
    const body = document.querySelector('body');
    body.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
  }

  render() {
    return (
      <div>
        <table>
          {this.state.board.map((row, i) => (<Row key={i} row={row} />))}
        </table>
      </div>
    );
  }
};

const Row = ({ row }) => {
  return (
    <tr>
      {row.map((cell, i) => (<Cell key={i} cellValue={cell} />))}
    </tr>
  );
};

const Cell = ({ cellValue }) => {
  let value = (cellValue === 0) ? '' : cellValue;


  return (
    <td>
      <div className="cell">
        <div className="number">{value}</div>
      </div>
    </td>
  );
};
ReactDOM.render(<Game />, document.getElementById('root'));