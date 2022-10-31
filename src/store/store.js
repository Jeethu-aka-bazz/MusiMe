import {configureStore, combineReducers} from '@reduxjs/toolkit';
import counterslice from './reducers/countereducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const presistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const RootReducer = combineReducers({
  counter: counterslice,
});

const persistedReducer = persistReducer(presistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};
