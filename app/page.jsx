import Diff from "./components/Diff";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="container">
        <Diff date=""></Diff>
      </div>
    </main>
  );
}
