import { differenceInDays, format } from 'date-fns';
import { el } from 'date-fns/locale'

export default function Diff({name, end}) {

    const startDate = new Date();
    const endDate = new Date(end);
    
    console.log(end);
    console.log(startDate);
    console.log(endDate);

    const daysDifference = differenceInDays(endDate, startDate);
    console.log(`Difference in days: ${daysDifference}`);
    console.log(daysDifference);

    return (
    <>
        <div className="diff-card bg-brilliant-rose-300 p-10 text-lg grid justify-center items-center gap-4">
            <h3 className='text-lg m-0'>{name}</h3>
            <p className='text-4xl'>
            {daysDifference}
            </p>
            <p className="text-sm">{ format(endDate,'dd MMMM', { locale: el }) }</p>
        </div>
    </>
    )
}
