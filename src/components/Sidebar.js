import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCategories } from "../store/actions";

const Sidebar = () => {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  const [showChild, setShowChild] = useState("initialState");
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
        <div
          key={parent.id}
          onMouseEnter={() => {
            setShowChild(parent.id);
          }}
          onMouseLeave={() => {
            setShowChild("");
          }}
        >
          <h3>{parent.data.name}</h3>
          {/* {true && ( */}
          {showChild === parent.id && (
            <ul>
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
          )}
        </div>
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
        <nav className="sidebar__navigation">{categoriesParse()}</nav>
      </div>
    );
  } else {
    return "";
  }
};

export default Sidebar;
