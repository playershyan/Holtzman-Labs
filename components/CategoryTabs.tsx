"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BusinessType, BUSINESS_TYPES } from "@/lib/templates-data";

interface CategoryTabsProps {
  activeCategory: BusinessType | "All";
  onCategoryChange: (category: BusinessType | "All") => void;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const tabs = ["All", ...BUSINESS_TYPES];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-12">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-white via-white to-transparent px-4 hover:text-[#8B5CF6] transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-white via-white to-transparent px-4 hover:text-[#8B5CF6] transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="border-b border-gray-200 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-8 min-w-max items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onCategoryChange(tab as BusinessType | "All")}
              className={`pb-4 text-lg font-semibold transition-colors whitespace-nowrap ${
                activeCategory === tab
                  ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
          <Link
            href="/contact"
            className="pb-4 text-lg text-gray-500 hover:text-[#8B5CF6] transition-colors whitespace-nowrap"
          >
            Couldn't find it? Contact us
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
