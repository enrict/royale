import React from "react";
import "./Collection.scss";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection">
      <h2>Shop > {title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(Collection);
