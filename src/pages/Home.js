import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/actions";

// const Home = ({ dispatch, products }) => {
const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productsList">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <h3 className="card__title">{product.data.title}</h3>
            <p>{product.data.smallDescription}</p>
            <p>{product.data.accessibility}</p>
            <p>{product.data.producer}</p>
            {/* <p>{product.data.specification.description}</p> */}
            <img
              src={product.data.imagesRefs[0].url}
              alt={product.data.imagesRefs[0].ref}
            />
            <p>{product.data.price}</p>
          </div>
        );
      })}
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   products: state.products
// });

export default Home;
// export default connect(mapStateToProps)(Home);
