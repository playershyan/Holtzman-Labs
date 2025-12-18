"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Template } from "@/lib/templates-data";

interface TemplateModalProps {
  template: Template;
  onClose: () => void;
}

export default function TemplateModal({ template, onClose }: TemplateModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="md:flex md:gap-8">
            {/* Preview Image */}
            <div className="md:w-2/5 mb-6 md:mb-0">
              <div className="bg-gray-100 aspect-[3/4] flex items-center justify-center border border-gray-200">
                <span className="text-gray-400">Template Preview</span>
              </div>
            </div>

            {/* Details */}
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {template.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {template.fullDescription}
              </p>

              {/* Features */}
              <h3 className="text-xl font-bold text-black mb-3">
                Features included:
              </h3>
              <ul className="space-y-2 mb-8">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#8B5CF6] mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8B5CF6] text-white px-6 py-3 font-semibold hover:bg-[#7C3AED] transition-colors text-center"
                >
                  View Live Demo →
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-[#8B5CF6] text-[#8B5CF6] px-6 py-3 font-semibold hover:bg-[#8B5CF6] hover:text-white transition-colors text-center"
                >
                  Get This Template
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
