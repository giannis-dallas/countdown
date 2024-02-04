import { differenceInDays, format } from 'date-fns';

export default function Diff({props}) {

    const startDate = new Date();
    const endDate = new Date(2024,11,15);
    
    const daysDifference = differenceInDays(endDate, startDate);
    console.log(`Difference in days: ${daysDifference}`);
    console.log(daysDifference);

    return (
    <>
        <dvv className="diff-card bg-maize p-20">
            Πόσες μέρες μέχρι τα Γενέθλιά μου;
            <p>
            {daysDifference}
            </p>
        </dvv>
    </>
    )
}
