import React from "react";

function CategoryFilter({ categories, selectCategory, onSelectCategory}) {
  const renderCategories = categories.map(category => {
    const className = category === selectCategory? "selected" : null
    return (
      <button 
        key={category} 
        className={className}
        value={category}
        onClick={()=>onSelectCategory(category)}
        >
        {category}
        </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
