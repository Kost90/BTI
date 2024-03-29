"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/services/book-ingeneer",
    name: "Виклик інженера онлайн",
  },
  {
    href: "/services/property-services",
    name: "Розрахунок оформлення нерухомості",
  },
  {
    href: "/services/calculation-cost-technical-pasport",
    name: "Розрахунок вартості технічного паспорту",
  },
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
 

  return (
    <div >
      <div className="container  flex items-baseline justify-between md:justify-center md:gap-14 text-sm md:text-lg my-7">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              link.href === pathname
                ? "text-green-500 text-center"
                : "text-slate-500 text-center"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="container">{children}</div>
    </div>
  );
}
