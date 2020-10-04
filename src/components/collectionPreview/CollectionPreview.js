import React from "react";
import "./CollectionPreview.scss";

import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4) //filtering results to show only four items
        .map((
          item //mapping through all other props
        ) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
