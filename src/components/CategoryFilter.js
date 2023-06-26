import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
