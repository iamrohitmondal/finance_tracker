import { createSlice, createSelector } from '@reduxjs/toolkit';

const savedData = JSON.parse(localStorage.getItem('financeData'));

const initialState = {
  incomeTransactions: savedData?.incomeTransactions || [],
  expenseTransactions: savedData?.expenseTransactions || [],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.incomeTransactions.unshift(action.payload);
    },
    deleteIncome: (state, action) => {
      state.incomeTransactions = state.incomeTransactions.filter(t => t.id !== action.payload);
    },
    updateIncome: (state, action) => {
      const index = state.incomeTransactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.incomeTransactions[index] = action.payload;
    },
    addExpense: (state, action) => {
      state.expenseTransactions.unshift(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenseTransactions = state.expenseTransactions.filter(t => t.id !== action.payload);
    },
    updateExpense: (state, action) => {
      const index = state.expenseTransactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.expenseTransactions[index] = action.payload;
    }
  },
});

export const { 
  addIncome, deleteIncome, updateIncome, 
  addExpense, deleteExpense, updateExpense 
} = financeSlice.actions;


const selectFinance = state => state.finance;

export const selectTotals = createSelector(
  [selectFinance],
  (finance) => {
   
    const incList = finance?.incomeTransactions || [];
    const expList = finance?.expenseTransactions || [];

    const totalInc = incList.reduce((a, b) => a + Number(b.amount || 0), 0);
    const totalExp = expList.reduce((a, b) => a + Number(b.amount || 0), 0);
    
    return {
      income: totalInc,
      expense: totalExp,
      balance: totalInc - totalExp
    };
  }
);

export default financeSlice.reducer;  