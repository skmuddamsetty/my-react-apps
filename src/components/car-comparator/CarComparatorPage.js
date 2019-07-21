import React from 'react';
import { connect } from 'react-redux';
const CarComparatorPage = props => (
  <div className="car-comparator">
    <div className="car-comparator__container">
      <h1 className="car-comparator__container-h1">Car Comparator</h1>
      <div className="car-comparator__container-main-box">
        <div className="car-comparator__container-main-box-1">
          <select className="car-comparator__container-main-box-1-select">
            {props.cars.length === 0 ? (
              <div className="list-item list-item--message">
                <span>No Cars</span>
              </div>
            ) : (
              props.cars.years.map(year => {
                return (
                  <option value={year} key={year}>
                    {year}
                  </option>
                );
              })
            )}
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
const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};
export default connect(mapStateToProps)(CarComparatorPage);
