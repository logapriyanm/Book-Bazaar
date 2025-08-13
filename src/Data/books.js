export const sampleBooks = [
  {
    id: 'b1',
    title: '',
    author: 'John Smith',
    department: 'Computer Science',
    edition: '5th Edition',
    price: 85,
    condition: 'Used',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
    seller: 'Alex Johnson',
    date: '2024-01-15',
    description: 'Good condition, some notes in margins.'
  },
  {
    id: 'b2',
    title: 'Organic Chemistry',
    author: 'Dr. Sarah Wilson',
    department: 'Chemistry',
    edition: '8th Edition',
    price: 120,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
    seller: 'Maria Garcia',
    date: '2024-01-12',
    description: 'Brand new copy, never opened.'
  },
  {
    id: 'b3',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    department: 'Mathematics',
    edition: '9th Edition',
    price: 95,
    condition: 'Used',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
    seller: 'David Chen',
    date: '2024-01-10',
    description: 'Good used condition with light highlighting.'
  },
  {
    id: 'b4',
    title: 'Principles of Economics',
    author: 'N. Gregory Mankiw',
    department: 'Economics',
    edition: '7th Edition',
    price: 75,
    condition: 'Used',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
    seller: 'Emily Rodriguez',
    date: '2024-01-08',
    description: 'Covers intact, mild wear.'
  },
  {
    id: 'b5',
    title: 'Campbell Biology',
    author: 'Jane Reece',
    department: 'Biology',
    edition: '11th Edition',
    price: 140,
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1545235617-9465f4149a30?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
    seller: 'Michael Kim',
    date: '2024-01-05',
    description: 'New copy.'
  },
  {
    id: 'b6',
    title: 'Psychology: The Science of Mind and Behaviour',
    author: 'Michael Passer',
    department: 'Psychology',
    edition: '6th Edition',
    price: 65,
    condition: 'Used',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
    seller: 'Sophie Taylor',
    date: '2024-01-03',
    description: 'Used but very clean.'
  },
];

export function loadInitialBooks(){
  const stored = localStorage.getItem('books_sample')
  if(stored) return JSON.parse(stored)
  localStorage.setItem('books_sample', JSON.stringify(sampleBooks))
  return sampleBooks
}
