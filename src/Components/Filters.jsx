


export default function Filters({filters, setFilters, departments}){
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium block mb-1 ">Department</label>
          <select value={filters.department} onChange={e=>setFilters({...filters, department: e.target.value})} className="w-full  border border-gray-400 rounded-md p-2">
            <option value="All">All Departments</option>
            {departments.map(d=> <option value={d} key={d}>{d}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Price Range</label>
          <div className="flex  gap-2">
            <input type="number" value={filters.min} onChange={e=>setFilters({...filters, min: Number(e.target.value)})} className="w-1/2  border border-gray-400 rounded-md p-2" />
            <input type="number" value={filters.max} onChange={e=>setFilters({...filters, max: Number(e.target.value)})} className="w-1/2  border border-gray-400 rounded-md p-2" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Condition</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2"><input type="radio" name="cond" checked={filters.condition==='All'} onChange={()=>setFilters({...filters, condition:'All'})}/> All</label>
            <label className="flex items-center gap-2"><input type="radio" name="cond" checked={filters.condition==='New'} onChange={()=>setFilters({...filters, condition:'New'})}/> New</label>
            <label className="flex items-center gap-2"><input type="radio" name="cond" checked={filters.condition==='Used'} onChange={()=>setFilters({...filters, condition:'Used'})}/> Used</label>
          </div>
        </div>
      </div>
    </div>
  )
}