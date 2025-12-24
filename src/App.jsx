import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  deleteIncome, updateIncome, 
  deleteExpense, updateExpense 
} from './features/finance/financeSlice';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionRow from './components/TransactionRow';

function App() {
 
  const { 
    incomeTransactions = [], 
    expenseTransactions = [] 
  } = useSelector(state => state.finance || {});
  
  const dispatch = useDispatch();

  const handleUpdate = (item, type) => {
    const newAmount = prompt("Enter new amount:", item.amount);
    if (!newAmount || isNaN(newAmount)) return;
    
    const updatedItem = { ...item, amount: Number(newAmount) };
    if (type === 'income') dispatch(updateIncome(updatedItem));
    else dispatch(updateExpense(updatedItem));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Smart Finance Manager</h1>
      <Dashboard />
      <TransactionForm />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        

        <div className="bg-white rounded-2xl border border-green-100 shadow-sm overflow-hidden">
          <div className="p-4 bg-green-50 border-b border-green-100">
            <h3 className="font-bold text-green-700">Income History</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {incomeTransactions.length > 0 ? (
              incomeTransactions.map(t => (
                <TransactionRow 
                  key={t.id} item={t} color="text-green-600"
                  onDelete={() => dispatch(deleteIncome(t.id))}
                  onEdit={() => handleUpdate(t, 'income')}
                />
              ))
            ) : (
              <p className="p-6 text-center text-gray-400">No income history</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden">
          <div className="p-4 bg-red-50 border-b border-red-100">
            <h3 className="font-bold text-red-700">Expense History</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {expenseTransactions.length > 0 ? (
              expenseTransactions.map(t => (
                <TransactionRow 
                  key={t.id} item={t} color="text-red-600"
                  onDelete={() => dispatch(deleteExpense(t.id))}
                  onEdit={() => handleUpdate(t, 'expense')}
                />
              ))
            ) : (
              <p className="p-6 text-center text-gray-400">No expense history</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;