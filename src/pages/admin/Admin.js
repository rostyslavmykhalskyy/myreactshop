import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory
} from "../../store/actions";
import styles from "./admin.scss";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [popup, setPopup] = useState(false);
  const [popUpName, setPopUpName] = useState("");
  const [showParentCategory, setShowParentCategory] = useState(false);
  const [parentCategory, setParentCategory] = useState({
    data: { name: "Unset" },
    id: 0
  });
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const categories = useSelector((state) => state.products.categories);
  let childs = [];
  let parents = [];

  const categoriesParse = () => {
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
            <button
              onClick={() => {
                dispatch(deleteCategory(parent.id));
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                setPopup(true);
                setPopUpName("update_category");
                setCategoryId(parent.id);
                setNewCategoryName(parent.data.name);
              }}
            >
              edit
            </button>
          </li>
          <ul>
            {childs.map((child) => {
              if (child.data.parentId === parent.id) {
                return (
                  <li key={child.id}>
                    <h3>{child.data.name}</h3>
                    <button
                      onClick={() => {
                        dispatch(deleteCategory(child.id));
                      }}
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        setPopup(true);
                        setPopUpName("update_category");
                        setCategoryId(child.id);
                        setParentCategory(parent);
                        setNewCategoryName(child.data.name);
                      }}
                    >
                      edit
                    </button>
                  </li>
                );
              } else {
                return "";
              }
            })}
          </ul>
        </ul>
      );
    });
  };
  const popUpHandler = () => {
    switch (popUpName) {
      case "add_category":
        // let parentCategory: {};
        return (
          <div className="adminPopUp--card">
            <h3 className="adminPopUp--card__title">Create category</h3>
            <div className="adminPopUp--card__content">
              <div>
                <input
                  onChange={(e) => {
                    setNewCategoryName(e.target.value);
                  }}
                  value={newCategoryName}
                  placeholder="Type name of category"
                />
                <button
                  onClick={() => {
                    dispatch(
                      addCategory({
                        parentId: parentCategory.id ? parentCategory.id : "",
                        name: newCategoryName
                      })
                    );
                  }}
                >
                  Add
                </button>
              </div>
              <div className="chooseCategories">
                <button
                  onClick={() => {
                    setShowParentCategory(!showParentCategory);
                  }}
                >
                  Parent category: {parentCategory.data.name}
                </button>
                {showParentCategory && (
                  <div>
                    {[
                      {
                        id: 0,
                        data: { name: "Unset" }
                      },
                      ...parents
                    ].map((parent) => {
                      return (
                        <p
                          onClick={() => {
                            setParentCategory(parent);
                            setShowParentCategory(!showParentCategory);
                          }}
                          key={parent.id}
                        >
                          {parent.data.name}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case "update_category":
        return (
          <div className="adminPopUp--card">
            <h3 className="adminPopUp--card__title">Update category</h3>
            <div className="adminPopUp--card__content">
              <div>
                <input
                  onChange={(e) => {
                    setNewCategoryName(e.target.value);
                  }}
                  value={newCategoryName}
                  placeholder="Type name of category"
                />
                <button
                  onClick={() => {
                    dispatch(
                      updateCategory({
                        categoryId,
                        parentId: parentCategory.id ? parentCategory.id : "",
                        name: newCategoryName
                      })
                    );
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      case "add_product":
        // let parentCategory: {};
        return (
          <div className="adminPopUp--card">
            <h3 className="adminPopUp--card__title">Create product</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const array = e.target;
                [...array].forEach((element) => {
                  console.log(element.name, element.value);
                });
              }}
              className="adminPopUp--card__content newProduct"
            >
              <input type="text" placeholder="Title" name="Title" />
              <input type="text" placeholder="Brand" name="Brand" />
              <input type="number" placeholder="Price" name="Price" />
              <input type="text" placeholder="Discount" name="Discount" />
              <input
                type="text"
                placeholder="Small description"
                name="small_description"
              />
              <input
                type="text"
                placeholder="Full description"
                name="full_description"
              />
              <input type="text" placeholder="Color" name="color" />
              <input type="text" placeholder="Details" name="details" />
              <input type="text" placeholder="Size" name="size" />
              <input type="file" name="files" id="" />
              <button
                type="submit"

                // onClick={() => {
                //   dispatch(
                //     addCategory({
                //       parentId: parentCategory.id ? parentCategory.id : "",
                //       name: newCategoryName
                //     })
                //   );
                // }}
              >
                Add
              </button>
              {/* <div>
                <input
                  onChange={(e) => {
                    setNewCategoryName(e.target.value);
                  }}
                  value={newCategoryName}
                  placeholder="Type name of category"
                />
                <button
                  onClick={() => {
                    dispatch(
                      addCategory({
                        parentId: parentCategory.id ? parentCategory.id : "",
                        name: newCategoryName
                      })
                    );
                  }}
                >
                  Add
                </button>
              </div>
              <div className="chooseCategories">
                <button
                  onClick={() => {
                    setShowParentCategory(!showParentCategory);
                  }}
                >
                  Parent category: {parentCategory.data.name}
                </button>
                {showParentCategory && (
                  <div>
                    {[
                      {
                        id: 0,
                        data: { name: "Unset" }
                      },
                      ...parents
                    ].map((parent) => {
                      return (
                        <p
                          onClick={() => {
                            setParentCategory(parent);
                            setShowParentCategory(!showParentCategory);
                          }}
                          key={parent.id}
                        >
                          {parent.data.name}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            */}
            </form>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="admin">
      <h2>Administration page</h2>
      <div className="cardList">
        <div className="card">
          <h3 className="card__title">Categories settings</h3>
          <div className="card__text">{categoriesParse()}</div>
          <div className="card__actions">
            <button
              onClick={() => {
                setPopup(true);
                setPopUpName("add_category");
              }}
            >
              Add category
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "70%" }}>
          <h3 className="card__title">Products</h3>
          {/* <div className="card__text">{categoriesParse()}</div> */}
          <div className="card__actions">
            <button
              onClick={() => {
                setPopup(true);
                setPopUpName("add_product");
              }}
            >
              Add product
            </button>
          </div>
        </div>
      </div>
      {popup && <div className="adminPopUp">{popUpHandler()}</div>}
    </div>
  );
};

export default Admin;
