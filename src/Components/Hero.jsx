import Home from "/Background.png"
import { useNavigate } from 'react-router-dom'

export default function Hero(){
  const nav = useNavigate()
  return (
    <section className="  bg-cover bg-center min-h-screen flex items-center "  style={{ backgroundImage: `url(${Home})`,opacity:  0.9 }}>
      <div className="container md:pl-30 px-6 text-white ">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">College Book Exchange</h1>
        <p className="mt-4 max-w-2xl text-xl drop-shadow-md">A book exchange platform for students to buy, sell, and trade textbooks at affordable prices. Connect with fellow students and save money on your academic materials.</p>

        <div className="mt-8 flex gap-4">
          <button onClick={()=>nav('/browse')} className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-800">Browse Books</button>
          <button onClick={()=>nav('/post')} className="border-2 border-white px-6 py-3 rounded-md hover:bg-blue-800 hover:text-white hover:border-blue-800">Post a Book</button>
        </div>
      </div>
    </section>
  )
}