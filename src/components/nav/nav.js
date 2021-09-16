export function Nav() {
  return (
    <nav>
      <ul className="flex bg-secondary p-4 rounded-full text-white">
        <li className="mr-2 cursor-pointer">
          <a href="./index.html">Home</a>
        </li>
        <li className="mr-2 cursor-pointer">
          <a href="./index.html">Nosotros</a>
        </li>
        <li className="mr-2 cursor-pointer">
          <a href="./index.html">Servicios</a>
        </li>
        <li className="mr-2 cursor-pointer">
          <a href="./index.html">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
