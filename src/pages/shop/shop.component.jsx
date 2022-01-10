import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data";
import './shop.styles.scss'



class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
    <div className="shop-page">
      {
        collections.map(collection => (
          <PreviewCollection key={collection.id} title = {collection.title} items={collection.items} />
        ))
      }
    </div>
    )
  }
}

export default ShopPage;