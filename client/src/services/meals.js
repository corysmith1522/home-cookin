import api from './apiConfig';

export const getAllMeals = async () => {
  const resp = await api.get('/meals');
  return resp.data;
}