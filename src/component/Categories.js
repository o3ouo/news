import React from 'react';
function categories({ category, onSelect }) {
  

  return (
    <nav className="nav">
      {
        category.map(tem => (
          <button type="button" key={tem.name} onClick={() => onSelect(tem.name)} className={tem.name}>{tem.name}</button>
        ))
      }
    </nav>
  );
}

export default categories;
