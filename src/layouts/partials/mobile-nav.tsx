import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "~/components/ui/button";

type IProps = {
  menus: { href: string; label: string }[];
};

export default function MobileNav({ menus }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        className="fixed top-4 right-4 z-50 bg-gray-800 p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <Menu className="text-white" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gray-100"></div>
            <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
              {menus.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
