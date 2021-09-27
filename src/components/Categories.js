import React from "react";

export const Categories = (props) => {
  return (
    <div className="btn-container">
      {props.categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => props.filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
