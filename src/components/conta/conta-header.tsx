"use client";

import React from "react";
import FeedIcon from "@/icons/feed-icon";
import StatsIcon from "@/icons/stats-icon";
import AddIcon from "@/icons/add-icon";
import LogoutIcon from "@/icons/logout-icon";
import styles from "./conta-header.module.css";
import useMedia from "@/hooks/use-media";
import { usePathname } from "next/navigation";
import Link from "next/link";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/post":
      return "Adicionar Foto";
    case "/conta/estatistics":
      return "Estatísticas";
    default:
      return "Minha Conta";
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    // userLogout();
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/statistics"
          className={pathname === "/conta/statistics" ? "active" : ""}
        >
          <StatsIcon />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/post"
          className={pathname === "/conta/post" ? "active" : ""}
        >
          <AddIcon />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
