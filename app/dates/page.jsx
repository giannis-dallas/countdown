import DateList from "../components/dateList"

export default function dates() {

  return (
    <main className="dates-main flex items-center justify-center my-20">
      <div className="container">
        <h1 className="text-2xl color-brilliant-rose-500 mb-12">Ημερομηνίες που έχουν προστεθεί</h1>
        <DateList></DateList>
      </div>
    </main>
  )
}
