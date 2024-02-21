"use client"; // This is a client component 

import { useState } from 'react';
import { useRouter } from 'next/navigation'

import { format } from 'date-fns';
import { el } from 'date-fns/locale'


import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



export default function AddDate() {
  const router = useRouter();

  const [selected, setSelected] = useState();
  const [name, setName] = useState('');
  const [isloading,setIsloanding] = useState(false);
  
  let footer = <p>Please pick a day.</p>;

  if (selected) {
    footer = <p>You picked {format(selected, 'PP', { locale: el }) }.</p>;
  }

  const handleSubmmit = async () => {

    setIsloanding(true);
    let newdate = { 
      'title': name,
      'date': format(selected, 'PP')
    }

    const res = await fetch('http://localhost:3001/dates/', {
      cache: 'no-store',
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify( newdate )
    })

    if(res.status === 201){
      router.refresh();
      router.push('/')
    }

  }

  return (
    <main className='lex items-center justify-center my-20'>
        <div className='container'>
            <h2 className="text-2x">Νέα ημερομηνία</h2>
            <input type="text" value={name} onChange={ e => setName(e.target.value)} className='p-2 mb-3'/>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
            <button 
              onClick={handleSubmmit}
              disabled = {isloading}
              className='py-3 px-5 bg-brilliant-rose-100'
            >
              { isloading && <span>Περίμενε...</span>}
              { !isloading && <span>Προσθήκη</span>}
            </button>
        </div>
    </main>
  )
}
