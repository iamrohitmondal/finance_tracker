import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome, addExpense, selectTotals } from '../features/finance/financeSlice';
import { Plus, IndianRupee, Tag } from 'lucide-react';
import showToast from '../Alert/Toast';

export default function TransactionForm() {
    const { balance } = useSelector(selectTotals);
    const dispatch = useDispatch();

  
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    
    const [incomeText, setIncomeText] = useState('');
    const [incomeAmount, setIncomeAmount] = useState('');

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        const numAmount = Number(amount);

        if (!text || !numAmount) {
            showToast("Please provide expense details","#ef4444");
            return;
        }

        if (numAmount > balance) {
            showToast("Expense cannot exceed balance","#ef4444");
            setAmount('');
            return;
        }

        
        dispatch(addExpense({ id: Date.now(), text, amount: numAmount }));
        showToast("Expense added!","#41cc46");
        setText(''); 
        setAmount('');
    };

    const handleIncomeSubmit = (e) => {
        e.preventDefault();
        const numIncome = Number(incomeAmount);

        if (!incomeText || !numIncome) {
            showToast("Please provide income details","#ef4444");
            return;
        }

        
        dispatch(addIncome({ id: Date.now(), text: incomeText, amount: numIncome }));
        showToast("Income added!","#41cc46");
        setIncomeText(''); 
        setIncomeAmount('');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
           
            <form onSubmit={handleIncomeSubmit} className="p-5 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                <h3 className="text-green-700 font-bold mb-3 flex items-center gap-2 text-sm uppercase">
                    <Plus size={16} /> Add Income
                </h3>
                <div className="flex flex-col gap-3">
                    <input 
                        className="p-3 rounded-xl border border-gray-200 focus:outline-green-500"
                        placeholder="Source (e.g., Salary)" 
                        value={incomeText} onChange={e => setIncomeText(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <input 
                            type="number" 
                            className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-green-500"
                            placeholder="Amount" 
                            value={incomeAmount} onChange={e => setIncomeAmount(e.target.value)}
                        />
                        <button className="bg-green-600 text-white px-5 rounded-xl hover:bg-green-700 transition-colors cursor-pointer">
                            Add
                        </button>
                    </div>
                </div>
            </form>

           
            <form onSubmit={handleExpenseSubmit} className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-gray-700 font-bold mb-3 flex items-center gap-2 text-sm uppercase">
                    <Plus size={16} /> Add Expense
                </h3>
                <div className="flex flex-col gap-3">
                    <input 
                        className="p-3 rounded-xl border border-gray-200 focus:outline-blue-500"
                        placeholder="Spent on (e.g., Rent)" 
                        value={text} onChange={e => setText(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <input 
                            type="number" 
                            className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-blue-500"
                            placeholder="Amount" 
                            value={amount} onChange={e => setAmount(e.target.value)}
                        />
                        <button className="bg-blue-600 text-white px-5 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}