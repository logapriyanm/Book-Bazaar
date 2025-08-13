
import Hero from '../components/Hero'
import Features from '../Components/Features'
import Stats from '../Components/Stats'

export default function Home(){
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
      <section className="container mx-auto px-6 py-10 text-center ">
        <h2 className="text-3xl font-bold">Ready to Start Saving?</h2>
        <p className="text-slate-500 mt-2">Join thousands of students who are already saving money on textbooks through our platform</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-800">Sign Up Now</a>
          <a href="/browse" className="border-2  px-6 py-3 rounded-md hover:bg-blue-600 hover:border-blue-600 hover:text-white ">Browse Books</a>
        </div>
      </section>
    </div>
  )
}