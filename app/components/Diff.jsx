import { differenceInDays, format } from 'date-fns';

export default function Diff({props}) {

    const startDate = new Date();
    const endDate = new Date(2024,11,15);
    
    const daysDifference = differenceInDays(endDate, startDate);
    console.log(`Difference in days: ${daysDifference}`);
    console.log(daysDifference);

    return (
    <>
        <div className="diff-card bg-brilliant-rose-300 p-16 text-lg grid justify-center items-center gap-4">
            Πόσες μέρες μέχρι τα Γενέθλιά μου;
            <p className='text-4xl mt-4'>
            {daysDifference}
            </p>
        </div>
    </>
    )
}
