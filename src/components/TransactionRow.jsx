import React from 'react';
import { Trash2, Edit3, IndianRupee } from 'lucide-react';

const TransactionRow = ({ item, color, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-all border-b last:border-0 border-gray-100 group">
      <div className="flex items-center gap-4">
        
        <div className={`w-3 h-3 rounded-full ${color.replace('text', 'bg')}`}></div>
        
        <div>
          <p className="font-semibold text-gray-800 capitalize text-base md:text-sm">{item.text}</p>
          <p className={`flex items-center font-bold ${color} text-lg md:text-sm`}>
            <IndianRupee className="w-4 h-4 mr-0.5" />
            {Number(item.amount).toLocaleString('en-IN')}
          </p>
        </div>
      </div>
      
      <div className="flex gap-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => onEdit(item)} 
          className="p-3 md:p-2 text-blue-500 bg-blue-50 lg:hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
          title="Update Amount"
        >
          
          <Edit3 className="w-6 h-6 md:w-5 md:h-5" />
        </button>
        <button 
          onClick={() => onDelete(item.id)} 
          className="p-3 md:p-2 text-red-400 md:text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
          title="Delete"
        >
          <Trash2 className="w-6 h-6 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default TransactionRow;