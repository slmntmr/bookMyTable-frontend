import axios from 'axios';

export const getAllRestaurantsService = async () => {
  const token = localStorage.getItem('token'); // Token'ı localStorage'dan al

  if (!token) {
    throw new Error('Kullanıcı giriş yapmamış. Lütfen giriş yapın.');
  }

  try {
    const response = await axios.get('http://localhost:8080/api/restaurants/all', {
      headers: {
        Authorization: `Bearer ${token}`, // Authorization header ekleniyor
      },
    });
    return response.data; // Restoran listesini döndür
  } catch (error) {
    console.error('Restoran verileri alınırken bir hata oluştu:', error);
    throw error;
  }
};
