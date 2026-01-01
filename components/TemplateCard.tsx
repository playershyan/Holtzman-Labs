"use client";

import { useState } from "react";
import Image from "next/image";
import { Template } from "@/lib/templates-data";

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export default function TemplateCard({ template, onClick }: TemplateCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="bg-gray-100 h-64 mb-4 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-[var(--color-primary)] transition-colors relative rounded-lg">
        {template.previewImage && !imageError ? (
          <Image
            src={template.previewImage}
            alt={template.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <span className="text-gray-400 text-sm">Preview</span>
        )} 
      </div>
      <h3 className="text-xl leading-tight md:text-2xl font-bold text-black mb-2">{template.title}</h3>
      <p className="text-gray-800 text-base leading-relaxed md:text-lg">
        {template.shortDescription}
      </p>
    </div>
  );
}
