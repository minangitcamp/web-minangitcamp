"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { useBreakPoint } from "~/hooks/useBreakpoint";
import { cn } from "~/lib/utils";

type NavLinks = { label: string; href: string };

const navbarLinks: NavLinks[] = [
  { href: "/", label: "Beranda" },
  { href: "#", label: "Tentang" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Acara" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 transition-all duration-300 border-b border-gray-700">
      <div className="mx-auto max-w-7xl h-[4rem] px-4 md:px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-white font-bold text-xl md:text-2xl hover:text-red-500 transition-colors">
              <a href="/">Minang IT Camp</a>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-4 md:gap-6">
            {navbarLinks.map((link) => (
              <a
                href={link.href}
                className="text-white text-base hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-gray-800 border border-gray-700">
              Hubungi Kami
            </Button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              className={cn(
                "mobile-menu-button -mr-2 rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset",
                "text-neutral-200 focus:ring-neutral-200"
              )}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <motion.svg
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: open ? 180 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNavbar open={open} onOpenChange={setOpen} />
    </nav>
  );
}

type MobileNavbarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function MobileNavbar({ open, onOpenChange }: MobileNavbarProps) {
  const { breakpoint } = useBreakPoint();
  const isMobile = ["md", "sm", "xs"].includes(breakpoint as string);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className={cn(
            "mobile-menu flex origin-top flex-col gap-2 lg:hidden",
            (isMobile || open) && "bg-neutral-25 h-screen text-neutral-900"
          )}
          initial={{ opacity: 0, height: 0, scaleY: 0 }}
          animate={{ opacity: 1, height: "100vh", scaleY: 1 }}
          exit={{
            opacity: 0,
            height: 0,
            scaleY: 0,
            transition: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.2 },
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.05,
          }}
        >
          <ul className="space-y-2 px-3 py-4 sm:px-6">
            {navbarLinks.map((item, index) => {
              if (item.href === "#") {
                return (
                  <motion.li
                    key={index}
                    className="relative h-[44px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <div
                      onClick={() => {
                        onOpenChange(!open);
                      }}
                      className={cn(
                        "flex h-full w-full cursor-pointer items-center px-3 py-2 text-base font-medium",
                        "transition-colors text-gray-100 hover:bg-neutral-200/80 hover:text-neutral-800"
                      )}
                    >
                      {item.label}
                    </div>
                  </motion.li>
                );
              }

              return (
                <motion.li
                  key={index}
                  className="relative h-[44px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "flex h-full w-full cursor-pointer items-center px-3 py-2 text-base font-medium hover:cursor-pointer",
                      "transition-colors text-gray-100 hover:bg-neutral-200/80 hover:text-neutral-800"
                    )}
                    onClick={() => onOpenChange(!open)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              );
            })}

            <motion.li
              className="flex items-center lg:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: navbarLinks.length * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Button className="bg-gray-800 border border-gray-700 w-full">
                Hubungi Kami
              </Button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
