import React from 'react';
import {connect} from "react-redux";
import './index.css';
import {Board} from "./components";
import {handle_click, jump_to_state} from "./actions";

class Game extends React.Component {
   render() {
    const history = this.props.history;
    const stepNumber = this.props.stepNumber;
    const winner = this.props.winner;
    const squares = history[stepNumber];
    var status = winner ? `PLayer ${winner} won the game.` : `Turn of player ${this.props.xIsNext ? "X" : "O"}.`;
    const steps = history.map((step, index) => {
      const stepText = 'Step ' + index;
      return (<div>
                <button key = {index} onClick={() => this.props.jumpToStep(index)}>
                {stepText}</button>
              </div>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board
          squares = {squares}
          onClick={i => this.props.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{steps}</ol>
        </div>
      </div>
    );
  }
}
// ========================================

const mapStateToProps = (state) => {
    return {
        history: state.history,
        stepNumber: state.stepNumber,
        xIsNext: state.xIsNext,
        winner: state.winner
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (i) => {
            dispatch(handle_click(i));
        },
        jumpToStep: (step) => {
            dispatch(jump_to_state(step));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
