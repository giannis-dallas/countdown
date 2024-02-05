import { differenceInDays, format } from 'date-fns';

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
        <div className="diff-card bg-brilliant-rose-300 p-16 text-lg grid justify-center items-center gap-4 my-4">
            <small>Πόσες μέρες μέχρι?</small>
            <p>{name}</p>
            <p className='text-4xl mt-4'>
            {daysDifference}
            </p>
        </div>
    </>
    )
}
