import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  );
}
