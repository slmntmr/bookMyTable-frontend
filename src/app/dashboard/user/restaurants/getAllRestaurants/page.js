"use client";

import React from 'react';
import GetAllRestaurantsForm from '@/components/restaurants/GetAllRestaurantsForm'; // Form bileşeni çağrıldı

const RestaurantsPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Form bileşenini çağırıyoruz */}
      <GetAllRestaurantsForm />
    </div>
  );
};

export default RestaurantsPage;
