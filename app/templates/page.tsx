"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import TemplateCard from "@/components/TemplateCard";
import TemplateModal from "@/components/TemplateModal";
import Footer from "@/components/Footer";
import { templates, BusinessType, Template } from "@/lib/templates-data";

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState<BusinessType | "All">("All");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Filtering logic
  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((t) => t.businessTypes.includes(selectedCategory));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-6 py-12 md:px-16 md:py-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight mb-4 md:mb-6">
            Templates
          </h1>
          <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed text-gray-700 mb-10 md:mb-12 max-w-3xl">
            Pre-built designs customized to your brand and content. Fast deployment, professional results
          </p>

          {/* Category Tabs */}
          <CategoryTabs
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Template Grid */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onClick={() => setSelectedTemplate(template)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No templates found for {selectedCategory}. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
      <Footer />
    </div>
  );
}
