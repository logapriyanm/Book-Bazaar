
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom'
import { currency } from '../utils/format'

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl  max-w-xs shadow-md overflow-hidden">
      <div className="h-48 bg-slate-100">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="text-base text-blue-600 font-medium">
          {book.department}
        </div>
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <div className="text-sm text-slate-800">by {book.author}</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            {currency(book.price)}
          </div>
          <Link
            to={`/books/${book.id}`}
            className="px-4 py-1 border-2 text-blue-700 border-blue-700 rounded-md hover:text-white hover:bg-blue-700 text-sm"
          >
            View Details
          </Link>
        </div>
        <div className="text-xs text-slate-400 mt-3 flex justify-between">
          <div className="flex items-center gap-2">
            <IoIosContact size={20} />
            {book.seller}
          </div>
          <div>{book.date}</div>
        </div>
      </div>
    </div>
  );
}
