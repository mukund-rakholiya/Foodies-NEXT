"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import classes from "./nav-link.module.css";

function NavLink({ href, children }) {
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
