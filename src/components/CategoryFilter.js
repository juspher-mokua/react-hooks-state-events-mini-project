import React from "react";

function CategoryFilter({ categories, selectedCat, onSelect }) {

  const buttons = categories.map((category) => {
    return ( 
      <button
        onClick={() => onSelect(category)}
        key={category}
        className={category === selectedCat ? "selected" : null}
        >
          {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
