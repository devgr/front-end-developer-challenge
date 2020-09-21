import { configureStore } from '@reduxjs/toolkit';
import loadoutReducer from './Loadout';

export default configureStore({
  reducer: {
    loadout: loadoutReducer,
  },
});
