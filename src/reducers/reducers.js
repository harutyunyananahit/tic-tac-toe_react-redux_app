const initialState = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
    switch (action.type) {
        case "HANDLE_CLICK": {
          const {stepNumber, xIsNext, winner} = state;
          const history = state.history.slice(0, state.stepNumber + 1);
          const squares = history[stepNumber].slice();
          if(squares[action.i] != null || winner) {break;}
          squares[action.i] = xIsNext ? 'X' : 'O';
          history.push(squares);
          state = {
            ...state,
            history,
            stepNumber: history.length - 1,
            xIsNext: !xIsNext,
            winner:calculateWinner(squares)
          };
          break;
        }
        case "JUMP_TO_STATE": {
          const winner = (state.winner &&  (state.stepNumber === action.step)) ? state.winner : null;
          state = {
            ...state,
            stepNumber: action.step,
            xIsNext: (action.step % 2) === 0,
            winner
          };
          break;
        }
    }
    return state;
};


// ==============================================================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default reducer;
