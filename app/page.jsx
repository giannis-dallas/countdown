import Diff from "./components/Diff";
import DateCards from "./components/dataCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between my-20">
      <div className="container">
        <h1 className="text-2xl color-brilliant-rose-500 mb-12">Πόσες μέρες μένουν μέχρι?</h1>
        <DateCards></DateCards>
      </div>
    </main>
  );
}
