import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Seat } from '../App';

interface AddSeatFormProps {
  onAddSeat: (seat: Omit<Seat, 'id'>) => void;
}

export function AddSeatForm({ onAddSeat }: AddSeatFormProps) {
  const [shortId, setShortId] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (shortId.trim() && tableNumber.trim()) {
      onAddSeat({ shortId: shortId.trim(), tableNumber: tableNumber.trim() });
      setShortId('');
      setTableNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="短ID (例: A1B2)"
        value={shortId}
        onChange={(e) => setShortId(e.target.value)}
        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="text"
        placeholder="桌號 (例: 101)"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <Plus className="h-5 w-5" />
        新增座位
      </button>
    </form>
  );
}
