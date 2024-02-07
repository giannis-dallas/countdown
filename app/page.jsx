import Diff from "./components/Diff";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between my-20">
      <div className="container">
        <h1 className="text-2xl color-brilliant-rose-500">Πόσες μέρες μένουν μέχρι?</h1>
        <div className="diff-cards">
          <Diff name="Τα Γενέθλιά μου" end="2024,12,15"></Diff>
          <Diff name="Την Γιορτή μου" end="2024,12,9"></Diff>
          <Diff name="Το Πάσχα" end="2024,05,05"></Diff>
        </div>
      </div>
    </main>
  );
}
