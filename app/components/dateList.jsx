import { format } from "date-fns"
import { el } from "date-fns/locale"

async function getDates(){
    const res = await fetch('https://countdown-4pgn.onrender.com/dates',{cache:"no-cache"})
    return res.json()
};


export default async function DateList() {
    const dates = await getDates()

  return (
    <>
        {dates.map( ({id, title, date}) => (
            <div key={id} className="max-w-sm pb-6 mb-6 border-b-2 border-brilliant-rose-200"> 
            <p className="text-md">
                {title}
            </p>
            <p className="text-sm text-brilliant-rose-600">
                {format(date, 'PP', {locale: el})}
            </p>
            </div>
        ))}
    </>
  )
}
