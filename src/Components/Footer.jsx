import { RiBookShelfLine } from "react-icons/ri";

export default function Footer(){
  return (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-md">
            <RiBookShelfLine />
          </div>
          <span className="font-semibold text-lg">BookBazaar</span>
        </div>
        <div className="text-sm text-slate-300">2025 College Book Exchange. All rights reserved.</div>
      </div>
    </footer>
  )
}