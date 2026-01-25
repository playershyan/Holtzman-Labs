"use client";

import { useState } from "react";
import Image from "next/image";
import { templates, Template } from "@/lib/templates-data";
import TemplateModal from "./TemplateModal";
import TemplateCard from "./TemplateCard";

export default function ViewWork() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

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
          <a
            href="/siteStats"
            className="text-lg font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors hidden sm:block"
          >
            See live demos →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTemplates.map((template, index) => (
            <div key={template.id} className="group cursor-pointer card-lift fade-up" style={{ animationDelay: `${index * 120}ms` }}>
              <TemplateCard template={template} onClick={() => setSelectedTemplate(template)} />
            </div>
          ))} 

          {selectedTemplate && (
            <TemplateModal template={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
          )
          }
        </div>
        <a
          href="/siteStats"
          className="mt-8 text-lg font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors sm:hidden block text-center"
        >
          See live demos →
        </a>
      </div>
    </section>
  );
}
