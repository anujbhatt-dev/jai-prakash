"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "about"],
  ["Books", "books"],
  ["Journey", "journey"],
  ["Research", "research"],
  ["Recognition", "awards"],
  ["Contact", "contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-seal" aria-hidden="true">MN</span>
          <span className="brand-name">
            <strong>Maharshi Navendu</strong>
            <small>Dr. Jai Prakash Navendu Maharshi Avtar</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} strokeWidth={1.6} /> : <Menu size={21} strokeWidth={1.6} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            {links.map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
                {label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
