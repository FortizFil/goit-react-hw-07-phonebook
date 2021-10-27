import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
