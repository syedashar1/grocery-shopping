// import wretch from 'wretch'
// export const customersApi = wretch('http://192.168.1.84:3000/api/v1/customers')

import wretch from "wretch";
import { BASE_URL } from "../constants";

export const customersApi = wretch(`${BASE_URL}/customers`);
export const baseApi = wretch(BASE_URL);
