import Link from "next/link";

export default function Navbar() {
  return (
    <header className="app-navbar bg-brilliant-rose-100 ">
      <div className="container mx-auto">
        <h1><Link href="/">Count down ap</Link>p</h1>
        <nav className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/dates">Dates</Link>
        </nav>
      </div>
    </header>
  )
}
