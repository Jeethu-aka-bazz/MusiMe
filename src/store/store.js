import {configureStore} from '@reduxjs/toolkit';
import counterslice from './reducers/countereducer';
import {persistStore, persistReducer} from 'redux-persist';

const store = configureStore({
  reducer: {
    counter: counterslice,
  },
});

export default store;
