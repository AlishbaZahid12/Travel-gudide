import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <header className="header">
        <ul>
        
        <Link href="/"><li>Home</li></Link>
        <Link href="/mountain"><li>Mountain Adventure</li></Link>
                <Link href="/scubadiving"><li>Scuba Diving</li></Link>
                <Link href="/urban"><li>Urban Adventure</li></Link>
                <Link href="/watersports"><li>Water Sports</li></Link>
        </ul>
      </header>
    </>
  );
}
