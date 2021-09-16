import "./header.css";
import { Nav } from "../nav/nav";
export function Header() {
  return (
    <header className="header flex justify-between py-8 bg-primary items-center px-4">
      <strong className="text-2xl">LOGO</strong>
      <Nav />
    </header>
  );
}
