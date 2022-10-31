let initialState = [];

const playlistsreducer = (state = initialState, action) => {
  if (action.type === 'addplaylist') {
    state.append(action.payload);
  }
  return state;
};

export default playlistsreducer;
