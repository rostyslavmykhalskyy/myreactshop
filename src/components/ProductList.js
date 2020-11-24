import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/actions";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div className="card--product" key={product.id}>
            <div
              className="card--product__picture"
              new="true"
              style={{
                backgroundImage: `url(${product.data.imagesRefs[0].url})`
              }}
            />
            <div className="card--product__content">
              <div className="card--product__title">
                <h3>{product.data.title}</h3>
                <p>{product.data.producer}</p>
              </div>
              <div className="card--product__actions">
                <button className="btn-icon">
                  <i className="i-favorite-sm"></i>
                </button>
                <button className="btn-icon">
                  <i className="i-cart-sm"></i>
                </button>
              </div>
              <div className="card--product__price" discount="true">
                <p
                  discount-pct="30"
                  new-price={product.data.price - product.data.price * 0.3}
                >
                  USD {product.data.price}
                </p>
              </div>
              {/* <p>{product.data.smallDescription}</p>
              <p>{product.data.accessibility}</p>
              <p>{product.data.producer}</p>
              <p>{product.data.specification.description}</p> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
