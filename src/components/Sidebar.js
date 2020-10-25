import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions";

const Sidebar = () => {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const categoriesParse = () => {
    let childs = [];
    let parents = [];
    categories.map((category) => {
      if (category.data.hasOwnProperty("parentId")) {
        return childs.push(category);
      } else {
        return parents.push(category);
      }
    });
    return parents.map((parent) => {
      return (
        <div key={parent.id}>
          <h1>{parent.data.name}</h1>
          {childs.map((child) => {
            if (child.data.parentId === parent.id) {
              return <p key={child.id}>{child.data.name}</p>;
            } else {
              return "";
            }
          })}
        </div>
      );
    });
  };

  return (
    <div className="sidebar">
      <p>Categories</p>
      {console.log(categories)}
      {categoriesParse()}
    </div>
  );
};

export default Sidebar;
