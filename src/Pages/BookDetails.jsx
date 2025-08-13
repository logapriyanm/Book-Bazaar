import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { loadInitialBooks } from '../Data/books.js'
import { currency } from '../utils/format'

export default function BookDetails(){
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(()=>{
    const list = loadInitialBooks()
    const found = list.find(b=>b.id === id)
    setBook(found)
  },[id])

  if(!book) return <div className="container mx-auto px-6 py-20">Book not found</div>

  return (
    <div className="container  mx-auto   px-6 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img src={book.image} alt={book.title} className="w-full rounded-md shadow" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <div className="text-slate-600">by {book.author}</div>
          <div className="mt-4 text-2xl font-bold text-blue-600">{currency(book.price)}</div>
          <div className="mt-6 text-slate-700">{book.description}</div>

          <div className="mt-8">
            <h3 className="font-semibold">Seller</h3>
            <div className="text-slate-600">{book.seller} • Posted on {book.date}</div>
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Contact Seller</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}