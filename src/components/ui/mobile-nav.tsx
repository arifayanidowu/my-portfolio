"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const activeSection = useActiveSection();

  const handleNavClick = (sectionId: string) => {
    console.log(`Mobile nav clicked: ${sectionId}`);

    // Close menu first
    onClose();

    // Wait a bit for menu animation to start, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // Account for fixed header
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        console.log(`Scrolling to ${sectionId} at position ${y}`);

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  const navItems = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden fixed top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="px-4 py-6 flex flex-col space-y-4">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`
              block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md
              ${
                activeSection === item.href
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              }
            `}
          >
            {item.label}
          </button>
        ))}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
}
