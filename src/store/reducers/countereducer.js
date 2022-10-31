let initialValue = 0;

const counterslice = (state = initialValue, action) => {
  if (action.type === 'increase') {
    state++;
  } else if (action.type === 'decreament') {
    state--;
  }
  return state;
};

export default counterslice;
