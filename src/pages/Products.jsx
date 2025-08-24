import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";

const Products = () => {
  return (
    <>
      <div className="pt-[5rem] text-center min-h-screen">
        <ProductsGrid />
      </div>
    </>
  );
};

export default Products;

{
  /* <div className="container mx-auto mt-32 px-4 py-8">
      <div className="mb-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
          <nav className="flex overflow-x-auto">
            {["all", "flower", "plant", "art", "tools"].map((category) => (
              <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setFilters({
                  location: "all",
                  season: "all",
                  category: "all",
                });
              }}
              className={`flex-1 py-4 px-6 text-center font-medium text-md transition-all duration-200 focus:outline-none ${
                activeCategory === category
                ? "text-pink-600 border-b-2 border-pink-500 bg-pink-50"
                : "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
              }`}
              >
                {category === "all"
                  ? "All Products"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {activeCategory !== "all" && (
        <div className="mb-6 flex flex-wrap gap-4">
          {activeCategory === "flower" && (
            <>
              <div className="filter-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location:
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                  >
                  <option value="all">All Locations</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Season:
                </label>
                <select
                  value={filters.season}
                  onChange={(e) => handleFilterChange("season", e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                  >
                  <option value="all">All Seasons</option>
                  {getUniqueSeasons("flower").map((season) => (
                    <option key={season} value={season}>
                      {season.charAt(0).toUpperCase() + season.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {activeCategory === "plant" && (
            <>
              <div className="filter-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location:
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                >
                  <option value="all">All Locations</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Season:
                </label>
                <select
                  value={filters.season}
                  onChange={(e) => handleFilterChange("season", e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                  >
                  <option value="all">All Seasons</option>
                  {getUniqueSeasons("plant").map((season) => (
                    <option key={season} value={season}>
                      {season.charAt(0).toUpperCase() + season.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {activeCategory === "art" && (
            <div className="filter-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Art Type:
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                >
                <option value="all">All Art</option>
                {artCategories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {activeCategory === "tools" && (
            <div className="filter-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tool Type:
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                >
                <option value="all">All Tools</option>
                {toolCategories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No products found for the selected filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div> */
}
