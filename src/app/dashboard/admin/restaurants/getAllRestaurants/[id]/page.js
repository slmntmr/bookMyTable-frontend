//src>app>dashboard>admmin>restaurants>getAllRestaurants>[id]>page.js
import React from 'react';
import GetAllRestaurantsForm from '@/components/restaurants/GetAllRestaurantsForm';

const RestaurantsPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <GetAllRestaurantsForm />
    </div>
  );
};

export default RestaurantsPage;
