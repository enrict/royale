import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collectionOverview.scss";
import { selectCollections } from "../../redux/shop/shopSelectors";
import CollectionPreview from "../collectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollections }) => (
        <CollectionPreview key={id} {...otherCollections} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
