import * as types from './types';

export const actionIncrease = ({ commit }) => {
  //console.log('actionIncrease');
  commit(types.INCREASE);
};

export const actionDecrease = ({ commit }) => {
  //console.log('actionDecrease');
  commit(types.DECREASE);
};
