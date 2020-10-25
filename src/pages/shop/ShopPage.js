import React from "react";
import CollectionOverview from "../../components/collectionsOverview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
  </div>
);

export default Shop;
