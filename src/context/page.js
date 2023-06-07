import { createContext, useContext } from 'react';

export const page = createContext();
export default function usePage() {
    return useContext(page);
}
