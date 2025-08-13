import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadInitialBooks } from '../Data/books'

export default function PostBook() {
  const nav = useNavigate()
  const [form, setForm] = useState({ title: '', author: '', department: '', course: '', edition: '', price: '', condition: 'New', swap: false, description: '' })

  function submit(e) {
    e.preventDefault()
    const books = loadInitialBooks()
    const newBook = {
      id: 'b' + (Date.now()),
      title: form.title,
      author: form.author,
      department: form.department || 'General',
      edition: form.edition || '',
      price: Number(form.price) || 0,
      condition: form.condition,
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      seller: JSON.parse(localStorage.getItem('bookexz_user') || JSON.stringify({ name: 'You' })).name || 'You',
      date: new Date().toISOString().slice(0, 10),
      description: form.description || ''
    }
    const updated = [newBook, ...books]
    localStorage.setItem('books_sample', JSON.stringify(updated))
    nav('/browse')
  }

  return (
    <div className="flex flex-col mx-auto px-6 items-center justify-center py-10">
      <div>
        <h1 className="text-3xl font-bold text-center">Post a Book</h1>
        <p className="text-slate-500 mt-2">List your textbook for sale and connect with students who need it.</p>
      </div>
      <div className='flex'>
        <form onSubmit={submit} className="mt-6 bg-white rounded-xl shadow p-6 max-w-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required placeholder="Book Title" className="p-3 border rounded-md" />
            <input value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} required placeholder="Author" className="p-3 border rounded-md" />
            <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} className="p-3  border rounded-md">
              <option value="">Select Department</option>
              <option>Computer Science</option>
              <option>Chemistry</option>
              <option>Mathematics</option>
              <option>Economics</option>
              <option>Biology</option>
              <option>Psychology</option>
            </select>
            <input value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} placeholder="Course Code (e.g., CS101)" className="p-3 border rounded-md" />
            <input value={form.edition} onChange={e => setForm({ ...form, edition: e.target.value })} placeholder="Edition" className="p-3 border rounded-md" />
            <input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} type="number" required placeholder="Price ($)" className="p-3 border rounded-md" />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-medium">Condition</label>
            <div className="flex gap-4">
              {['New', 'Like New', 'Good', 'Fair'].map(c => (
                <label key={c} className="inline-flex items-center gap-2"><input type="radio" name="cond" checked={form.condition === c} onChange={() => setForm({ ...form, condition: c })} /> {c}</label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="inline-flex items-center gap-2"><input type="checkbox" checked={form.swap} onChange={e => setForm({ ...form, swap: e.target.checked })} /> Available for swapping</label>
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-medium">Description</label>
            <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} maxLength={500} placeholder="Describe the condition of your book, any highlights, notes, etc." className="w-full p-3 border rounded-md h-28" />
            {/* <div className="text-sm text-slate-500 mt-1">{form.description.length}/500 characters</div> */}
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Post Book</button>
          </div>
        </form>
      </div>
    </div>
  )
}