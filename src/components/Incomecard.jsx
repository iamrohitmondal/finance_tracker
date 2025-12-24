import { useSelector } from "react-redux";
import { selectTotals } from "../features/finance/financeSlice";
import { ArrowUpCircle,IndianRupee } from "lucide-react";
const Incomecard = () => {
  const { income } = useSelector(selectTotals);
  
  return (
    <div className="mb-6">
      <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="p-3 rounded-xl bg-green-50">
          <ArrowUpCircle className="text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Total Income</p>
          <p className="text-xl flex items-center font-bold text-gray-800">
            <IndianRupee size={20} />
            {income?.toLocaleString('en-IN') || 0}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Incomecard