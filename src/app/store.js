import { configureStore } from '@reduxjs/toolkit';
import financeReducer from '../features/finance/financeSlice';

export const store = configureStore({
  reducer: {
    finance: financeReducer,
    income:financeReducer
  },
});


store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('financeData', JSON.stringify(state.finance));
});