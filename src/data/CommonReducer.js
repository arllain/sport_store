import { combineReducers } from 'redux';

export const CommonReducer = (...reducers) => (storeData, action) => {
   for (let i = 0; i < combineReducers.length; i++) {
      let newStore = reducers[i](storeData, action);
      if (newStore !== storeData) {
         return newStore;
      }
   }
   return storeData;
};
