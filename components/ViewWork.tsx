"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { templates } from "@/lib/templates-data";

export default function ViewWork() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (templateId: string) => {
    setImageErrors((prev) => ({ ...prev, [templateId]: true }));
  };

  // Show first 2 templates for a tighter homepage preview
  const featuredTemplates = templates.slice(0, 2);

  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight">
            Work
          </h2>
          <Link
            href="/templates"
            className="text-lg font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors hidden sm:block"
          >
            View templates →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTemplates.map((template, index) => (
            <Link
              key={template.id}
              href="/templates"
              className="group cursor-pointer card-lift fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="bg-gray-100 h-64 mb-4 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-[var(--color-primary)] transition-colors relative rounded-lg">
                {template.previewImage && !imageErrors[template.id] ? (
                  <Image
                    src={template.previewImage}
                    alt={template.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(template.id)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">Preview</span>
                )}
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl leading-tight md:text-2xl font-bold text-black mb-2">
                  {template.title}
                </h3>
                <span className="text-sm font-mono text-gray-500 mt-1">{template.businessTypes[0]}</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed md:text-lg mt-2">
                {template.shortDescription}
              </p>
            </Link>
          ))} 
        </div>
        <Link
          href="/templates"
          className="mt-8 text-lg font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors sm:hidden block text-center"
        >
          View templates →
        </Link>
      </div>
    </section>
  );
}
