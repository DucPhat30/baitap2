import axios from 'axios';

const api = axios.create({
  baseURL: 'http://103.172.79.8:44422/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postCars = async (cars) => {
  const response = await api.post('/cars', cars);
  return response.data;
};

export const getCars = async () => {
  const response = await api.get('/cars');
  return response.data;
};

export const putCar = async (ID,updateData) =>{
  const response = await api.put('/cars/'+ID,updateData);
  return response.data;
}

export const deleteCar = async (ID) =>{
  const response = await api.delete('/cars/'+ID);
  return response.data;
}