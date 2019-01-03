import React from 'react';
import FoodsList from '../containers/listFoods';
import CatalogHeader from './catalogHeader';

const Catalog = () => (
  <div className="container">
    <CatalogHeader />
    <FoodsList />
  </div>
);

export default Catalog;