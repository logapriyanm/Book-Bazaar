

export default function Stats(){
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-6 md:grid md:grid-cols-3  text-center">
        <div>
          <div className="text-5xl font-bold">500+</div>
          <div className="text-base mt-2">Books Available</div>
        </div>
        <div>
          <div className="text-5xl font-bold">1,200+</div>
          <div className="text-base mt-2">Active Students</div>
        </div>
        <div>
          <div className="text-5xl font-bold">$50k+</div>
          <div className="text-base mt-2">Total Savings</div>
        </div>
      </div>
    </section>
  )
}