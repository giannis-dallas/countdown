import Diff from "./Diff"

async function getDates(){
    const res = await fetch('https://countdown-4pgn.onrender.com/dates', { cache: "no-cache"})
    return res.json()
};


export default async function DateCards() {
    const dates = await getDates()
  return (
    <div className="diff-cards">
        {dates.map( (date) => (
            <Diff key={date.id} name={date.title} end={date.date}></Diff>
        ))}
    </div>
  )
}
