import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkColor = "cyan-600" | "purple-600";
type ButtonLinkProps = {
  href: string;
  color: ButtonLinkColor;
  children: ReactNode;
};

export default function ButtonLink({ href, color, children }: ButtonLinkProps) {
  const backgroundColor =
    color === "cyan-600" ? "bg-cyan-600" : "bg-purple-600";

  return (
    <Link
      className={`inline-block ${backgroundColor} px-500 py-200 rounded-400 self-center tp-5 text-white`}
      href={href}
    >
      {children}
    </Link>
  );
}
