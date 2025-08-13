import React from 'react'
import { IoIosContact } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const nav = useNavigate()
  function onSubmit(e) {
    e.preventDefault()
    // demo sign up: redirect to home
    nav('/')
  }

  return (
    <div className="container mx-auto px-6 py-14 flex justify-center items-center ">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <div className='flex  justify-center'>
          <div className="  mb-4  h-20 w-20  bg-blue-300 rounded-full">
            <IoIosContact size={80} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Create your account</h2>
        <p className="text-slate-500 text-center mb-6">Join the BookExchange community</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input placeholder="Full Name" className="w-full p-3 border rounded-md" required />
          <input placeholder="Email or Student ID" className="w-full p-3 border rounded-md" required />
          <input placeholder="Create a password" type="password" className="w-full p-3 border rounded-md" required />
          <input placeholder="Confirm your password" type="password" className="w-full p-3 border rounded-md" required />
          <button className="w-full bg-blue-600 text-white p-3 rounded-md">Create Account</button>
        </form>
        <div className="mt-4 text-center text-slate-500">Already have an account? <a href="/login" className="text-blue-600">Sign in here</a>
        </div>
      </div>
    </div>
  )
}