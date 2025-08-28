"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  href,
  children,
  isActive,
  onClick,
  className,
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Use a more reliable scroll method for mobile
      const yOffset = -80; // Account for fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    // Delay the onClick to allow scrolling to start
    setTimeout(() => {
      onClick?.();
    }, 100);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
        isActive
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="activeSection"
            className="absolute inset-x-0 -bottom-3 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </motion.a>
  );
}
