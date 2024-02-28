import Link from "next/link";
interface TabLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function TabLink({ href, label, isActive }: TabLinkProps) {
  return (
    <Link
      href={href}
      data-active={isActive}
      className="text-gray-500 data-[active=true]:text-orange-400 data-[active=true]:font-semibold hover:text-black transition-all "
    >
      {label}
    </Link>
  );
}

export default TabLink;
