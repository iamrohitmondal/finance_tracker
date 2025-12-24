import { useSelector } from 'react-redux';
import { selectTotals } from '../features/finance/financeSlice';
import { Wallet, ArrowDownCircle, IndianRupee } from 'lucide-react';
import Incomecard from './Incomecard';

export default function Dashboard() {

  const { income, expense, balance } = useSelector(selectTotals);

  const stats = [
    { label: 'Total Balance', val: balance, icon: <Wallet className="text-blue-600"/>, bg: 'bg-blue-50' },
    { label: 'Total Expense', val: expense, icon: <ArrowDownCircle className="text-red-600"/>, bg: 'bg-red-50' },
  ];
  

  return (
    <div className="space-y-6">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow ">
            <div className={`p-3 rounded-xl ${s.bg}`}>{s.icon}</div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
              <p className="text-xl flex items-center font-bold text-gray-800">
                <IndianRupee size={18} />
                {s.val.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Incomecard incomeValue={income} />
    </div>
  );
}   