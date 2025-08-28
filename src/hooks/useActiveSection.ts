"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let mounted = true;

    const setupObserver = () => {
      try {
        const sections = document.querySelectorAll("section[id]");

        if (sections.length === 0) {
          return;
        }
        // Clean up existing observer
        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
          (entries) => {
            if (!mounted) return;

            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            rootMargin: "-20% 0px -35% 0px",
            threshold: 0,
          }
        );

        sections.forEach((section) => {
          observerRef.current?.observe(section);
        });
      } catch (error) {
        console.error("Error setting up intersection observer:", error);
      }
    };

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      if (mounted) {
        setupObserver();
      }
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return activeSection;
}
