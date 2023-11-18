import { formatDate } from "../utils/dataUtils.js";

const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();

  const data = Object.values(result);
  return data;
}

export const create = async (userData) => {
  const body = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    imageUrl: userData.imageUrl,
    phoneNumber: userData.phoneNumber,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    address: {
      country: userData.country,
      city: userData.city,
      street: userData.street,
      streetNumber: userData.streetNumber,
    }
  }
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  return result;
}