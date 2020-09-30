import React from "react";
import shopData from "./shopData";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }

  render() {
    // this needed the {} as it states that this is an object
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default Shop;
