import { createContext, useContext } from 'react';

export const shoppingCart = createContext();
export default function useCart() {
    return useContext(shoppingCart);
}
