"use client";

import Image from "next/image";
import { Template } from "@/lib/templates-data";

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export default function TemplateCard({ template, onClick }: TemplateCardProps) {
  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="bg-gray-100 h-64 mb-4 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-[#8B5CF6] transition-colors relative">
        {template.previewImage ? (
          <Image
            src={template.previewImage}
            alt={template.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <span className="text-gray-400 text-sm">Template Preview</span>
        )}
      </div>
      <h3 className="text-xl leading-tight md:text-2xl font-bold text-black mb-2">{template.title}</h3>
      <p className="text-gray-700 text-base leading-relaxed md:text-lg">
        {template.shortDescription}
      </p>
    </div>
  );
}
