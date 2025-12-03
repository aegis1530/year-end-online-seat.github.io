import { Seat } from '../App';
import { Armchair } from 'lucide-react';

interface SeatListProps {
  seats: Seat[];
  searchQuery: string;
}

export function SeatList({ seats, searchQuery }: SeatListProps) {
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-slate-900">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  if (seats.length === 0) {
    return (
      <div className="text-center py-12">
        <Armchair className="h-12 w-12 text-slate-300 mx-auto mb-3" />
        <p className="text-slate-500">沒有找到符合的座位</p>
        <p className="text-slate-400">請嘗試其他搜尋關鍵字</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {seats.map((seat) => (
        <div
          key={seat.id}
          className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Armchair className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-slate-500 mb-1">短ID</div>
                <div className="text-slate-900">
                  {highlightText(seat.shortId, searchQuery)}
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <div className="text-slate-500 mb-1">桌號</div>
                <div className="text-slate-900">
                  {highlightText(seat.tableNumber, searchQuery)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
