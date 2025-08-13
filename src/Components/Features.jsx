import { FaRupeeSign } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineRecycling } from "react-icons/md";

function Card({title,desc,icon}){
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-8 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-semibold mb-2 text-xl">{title}</h3>
      <p className="text-base text-slate-600">{desc}</p>
    </div>
  )
}

export default function Features(){
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center">Why Choose BookBazaar?</h2>
      <p className="text-center text-slate-500 mt-2">The easiest way for students to buy and sell textbooks within their college community</p>

      <div className="grid md:grid-cols-3 gap-20 mt-10 mx-20">
        <Card title="Save Money" desc="Buy used textbooks at up to 70% off retail prices from fellow students" icon={<FaRupeeSign  size={20}/>}/>
        <Card title="Local Community" desc="Connect with students from your college for easy pickup and delivery" icon={<IoPeopleSharp size={20}/>}/>
        <Card title="Eco-Friendly" desc="Give textbooks a second life and reduce waste by reusing educational materials" icon={<MdOutlineRecycling size={20}/>
}/>
      </div>
    </section>
  )
}