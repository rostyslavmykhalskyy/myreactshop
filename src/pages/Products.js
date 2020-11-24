import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { getProducts } from "../store/actions";

const Products = () => {
  return (
    <div className="products">
      <div className="products__filters">
        <Filters />
      </div>
      <div className="products__content">
        <p>Home / Accessories / Jewelry (130)</p>
        <div className="products__title">
          <h2>Jewelry</h2>
          <div className="products__sort">
            <div className="sort-field">
              <p>
                Sort by: <strong>Price lot to hight</strong>
                <i className="i-chevron-accordion"></i>
              </p>
            </div>
            <div className="sort-options">
              <p>Price low to hight</p>
              <p>Price hight to low</p>
              <p>First newest</p>
              <p>First oldest</p>
            </div>
          </div>
        </div>
        <div className="products__list">
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
          {<ProductList />}
        </div>
        <div className="pagination">
          <button>1</button>
          <button className="active">2</button>
          <button>3</button>
          <button>4</button>
          <button>&#62;</button>
          <button>&#62;&#62;</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
