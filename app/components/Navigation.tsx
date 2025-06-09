import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-center px-1000 pt-500 desktop:pt-1000">
        <li>
          <Link href="/">
            <Image src={logo} alt="Meet logo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
