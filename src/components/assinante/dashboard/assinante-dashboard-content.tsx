"use client";

import { FeaturedModels } from "./featured-models";
import { CategoriesSection } from "./categories-section";
import { RecommendedModels } from "./recommended-models";
import { TrendingContent } from "./trending-content";

export function AssinanteDashboardContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
   

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-6 py-12 space-y-16">
        <FeaturedModels />
        <CategoriesSection />
        <RecommendedModels />
        <TrendingContent />
      </div>
    </div>
  );
}
