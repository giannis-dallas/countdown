import Diff from "./components/Diff";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="container">
        <Diff name="Γενέθλιά μου" end="2014,12,15"></Diff>
        <Diff name="Γιορτή μου" end="2024,12,9"></Diff>
      </div>
    </main>
  );
}
