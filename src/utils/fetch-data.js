/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { collectionData } from 'rxfire/firestore';
import { db } from '../db/firebase';

export const getDataWithAxios = async (sourceLink) => {
  const response = await axios.get(
    sourceLink,
  );
  return response.data;
};

export const getDataUsingFetch = async (url) => fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((response) => response.json());
