import Link from "next/link";

export default function Navbar() {
  return (
    <header className="app-navbar bg-brilliant-rose-100 ">
      <div className="container mx-auto">
        <h1 className="m-0 text-2xl font-bold tracking-wide"><Link href="/">ΠΟΣΟ ΜΕΝΕΙ</Link></h1>
        <nav className="flex gap-6">
          <Link href="/">Αρχικη</Link>
          <Link href="/dates">Ημέρες</Link>
          <Link href="/adddate">+</Link>
        </nav>
      </div>
    </header>
  )
}
