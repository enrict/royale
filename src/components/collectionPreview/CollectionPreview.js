import React from "react";
import "./CollectionPreview.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4) //filtering results to show only four items
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
