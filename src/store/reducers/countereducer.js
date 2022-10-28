const counterslice = (state = {value: 0}, action) => {
  if (action.type === 'increase') {
    console.log('stopersfds', state.value + 1);
    // state++;
  } else if (action.type === 'decreament') {
    state--;
  }
  return state;
};

export default counterslice;
