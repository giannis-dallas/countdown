async function getDates(){
    const res = await fetch('http://localhost:3001/dates')
    return res.json()
};


export default async function DateList() {
    const dates = await getDates()
  return (
    <>
        <h1 className="text-3xl">Ημερομηνίες</h1>
        {dates.map( (date) => (
            <div key={date.id}>
                {date.title}
            </div>
        ))}
    </>
  )
}
