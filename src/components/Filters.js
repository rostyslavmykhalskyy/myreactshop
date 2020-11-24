import React, { useEffect } from "react";
import Checkbox from "./uiComponents/Checkbox";
import Slider from "./uiComponents/Slider";

const Filters = () => {
  useEffect(() => {
    const filterBlocks = document.getElementsByClassName("filter");

    [...filterBlocks].forEach((element) => {
      element.childNodes[0].addEventListener("click", () => {
        element.classList.toggle("filter--active");
        var panel = element.childNodes[1];
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }, []);
  return (
    <>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Refine by</h4>
        </div>
        <div className="filter__accordion">
          <div className="chip">
            <p>
              Green<i className="i-close"></i>
            </p>
            <p>
              Silver<i className="i-close"></i>
            </p>
            <p>
              XL<i className="i-close"></i>
            </p>
            <p>
              Cotton<i className="i-close"></i>
            </p>
            <p>
              Cotton<i className="i-close"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Price</h4>
        </div>
        <div className="filter__accordion">
          <div>
            <Slider min={20} max={5000} />
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Material</h4>
        </div>
        <div className="filter__accordion">
          <div>
            {["Gold", "Silver", "Bronze", "Iron"].map((element, index) => {
              return <Checkbox text={element} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Subcategory</h4>
        </div>
        <div className="filter__accordion">
          <div>
            <p>checkbox Necklaces</p>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Brand</h4>
        </div>
        <div className="filter__accordion">
          <div>
            <p>Brand name</p>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Details</h4>
        </div>
        <div className="filter__accordion">
          <div>
            <p>Brand name</p>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filter__title">
          <i className="i-chevron-accordion"></i>
          <h4>Collection</h4>
        </div>
        <div className="filter__accordion">
          <div>
            <p>Brand name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
