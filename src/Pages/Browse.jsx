import React, {useMemo, useState, useEffect} from 'react'
import Filters from '../Components/Filters'
import BookCard from '../Components/BookCard'
import { loadInitialBooks } from '../Data/books.js'
import { FaSearch } from "react-icons/fa";

export default function Browse(){
  const [books, setBooks] = useState([])
  const [filters, setFilters] = useState({department:'All', min:0, max:1000, condition:'All', q:''})

  useEffect(()=>{
    setBooks(loadInitialBooks())
  },[])

  const departments = useMemo(()=>{
    const set = new Set(books.map(b=>b.department))
    return [...set]
  },[books])

  const filtered = useMemo(()=>{
    return books.filter(b=>{
      if(filters.department !== 'All' && b.department !== filters.department) return false
      if(b.price < filters.min || b.price > filters.max) return false
      if(filters.condition !== 'All' && b.condition !== filters.condition) return false
      if(filters.q && !(b.title.toLowerCase().includes(filters.q.toLowerCase()) || b.author.toLowerCase().includes(filters.q.toLowerCase()))) return false
      return true
    })
  },[books,filters])

  return (
    <div className="container  px-30 py-10  ">
      <h1 className="text-4xl font-bold">Browse Books</h1>
      <p className="text-slate-500 mt-2">Find the perfect textbooks for your courses</p>

      <div className="mt-6 flex gap-4 items-center">
        <input value={filters.q} onChange={e=>setFilters({...filters, q:e.target.value})} className="flex-1 border border-gray-400  rounded-md p-2 " placeholder="Search by title, author, or department..." />
        <div className="text-slate-500">{filtered.length} books found</div>
      </div>

      <div className="mt-6">
        <Filters filters={filters} setFilters={setFilters} departments={departments} />
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {filtered.map(b=> <BookCard book={b} key={b.id} />)}
      </div>
    </div>
  )
}