// api la irunthu data vara nala ctreate apiSlice..
import { BASE_URL } from '../src/constants'; // imported my base url , for to use
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// basequery variable , i have given my baseurl...
const  baseQuery =  fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({ // intha method use pannithan fetch panna porom..
    // single endpoint ah iruntha direct ah , reducer path kuduthu create pannidalam , 
    // but we have four endpoints.., so antha endpoint s ah inject than pannanum..
    baseQuery:baseQuery, // ennoda basequery na create panna variable..
    endpoints: (builder) => ({}) // intha endpoint la single endpoint na direct ah , kuduthuralam,
    // but here i have 4 endpoint , so we have to inject our end points here..
})

export default apiSlice;