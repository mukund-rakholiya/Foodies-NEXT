import { usePathname } from "next/navigation";
import React from "react";

function NavLink({href, children}) {
  const path = usePathname();
   
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}

export default NavLink;
