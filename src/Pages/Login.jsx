import { IoIosContact } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const nav = useNavigate()
  function onSubmit(e){
    e.preventDefault()
    // demo login: save to localStorage
    localStorage.setItem('book_user', JSON.stringify({email:'demo@demo'}))
    nav('/')
  }

  return (
    <div className="container mx-auto px-6 py-14 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <div className='flex  justify-center'>
                  <div className="  mb-4  h-20 w-20  bg-blue-300 rounded-full">
                    <IoIosContact size={80} />
                  </div>
                </div>
        <h2 className="text-2xl font-bold text-center mb-2">Sign in to your account</h2>
        <p className="text-slate-500 text-center mb-6">Access your BookExchange account</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input placeholder="Enter your email or student ID" className="w-full p-3 border rounded-md" required />
          <input placeholder="Enter your password" type="password" className="w-full p-3 border rounded-md" required />
          <button className="w-full bg-blue-600 text-white p-3 rounded-md">Sign In</button>
        </form>
        <div className="mt-4 text-center text-slate-500">Don't have an account? <a href="/signup" className="text-blue-600">Sign up here</a></div>

        <div className="mt-6 bg-blue-50 p-3 rounded-md text-sm text-slate-700">Demo Account: Use any email format and password to test the login functionality.</div>
      </div>
    </div>
  )
}