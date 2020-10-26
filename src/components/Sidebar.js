import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCategories } from "../store/actions";

const Sidebar = () => {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  useEffect(() => {
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
        <ul key={parent.id}>
          <li>
            <h2>{parent.data.name}</h2>
          </li>
          {childs.map((child) => {
            if (child.data.parentId === parent.id) {
              return (
                <li key={child.id}>
                  <h3>{child.data.name}</h3>
                </li>
              );
            } else {
              return "";
            }
          })}
        </ul>
      );
    });
  };
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  if (usePathname() === "/") {
    return (
      <div className="sidebar">
        <h2 className="sidebar__title">Categories</h2>
        <nav className="sidebar__navigation">{categoriesParse()}</nav>
      </div>
    );
  } else {
    return "";
  }
};

export default Sidebar;
