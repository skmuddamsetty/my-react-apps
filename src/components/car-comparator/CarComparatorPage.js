import React from 'react';
const CarComparatorPage = () => (
  <div className="car-comparator">
    <div className="car-comparator__container">
      <h1 className="car-comparator__container-h1">Car Comparator</h1>
      <div className="car-comparator__container-main-box">
        <div className="car-comparator__container-main-box-1">
          <select className="car-comparator__container-main-box-1-select">
            <option>One</option>
            <option>Two</option>
          </select>
        </div>
        <div className="car-comparator__container-main-box-2">
          <select className="car-comparator__container-main-box-2-select">
            <option>One</option>
            <option>Two</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);
export default CarComparatorPage;
