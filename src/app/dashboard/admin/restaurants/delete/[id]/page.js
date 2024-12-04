"use client";

import React from 'react';
import DeleteRestaurantForm from '@/components/restaurants/DeleteRestaurantForm';

const DeleteRestaurantPage = ({ params }) => {
  const { id } = params; // Dinamik ID parametresini alıyoruz

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <DeleteRestaurantForm id={id} /> {/* Dinamik ID ile formu çağır */}
    </div>
  );
};

export default DeleteRestaurantPage;
