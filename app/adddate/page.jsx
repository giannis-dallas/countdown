"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


export default function AddDate() {

  const [selected, setSelected] = useState();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <main className='lex items-center justify-center my-20'>
        <div className='container'>
            <h2 className="text-2x">Νέα ημέρα</h2>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </div>
    </main>
  )
}
