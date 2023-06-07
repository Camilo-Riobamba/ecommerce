import { createContext, useContext } from 'react';

export const products = createContext();
export default function useProducts() {
    return useContext(products);
}
